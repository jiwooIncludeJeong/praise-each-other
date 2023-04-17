import {
  CheckBox,
  Layout,
  Text,
  TopNavigation,
} from '@components/design-system';
import type { LoaderArgs } from '@remix-run/node';
import { json, Response } from '@remix-run/node';
import { createSupabaseClient } from 'src/libs';
import { useLoaderData, useNavigate, useOutletContext } from '@remix-run/react';
import CategoryButton from '@components/feedback/CategoryButton/CategoryButton';
import { useRef, useState } from 'react';
import type { Database } from 'src/types';
import BottomSheet from '@components/design-system/BottomSheet/BottomSheet';
import CategorySelectBottomSheet from '@components/feedback/CategorySelectBottomSheet/CategorySelectBottomSheet';
import StickerButton from '@components/feedback/StickerButton/StickerButton';
import type { SupabaseOutletContext } from '~/root';
import SnackBar from '@components/design-system/SnackBar/SnackBar';
import { useRoutes } from 'react-router';

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  // @ts-ignore
  const supabase = createSupabaseClient({ request, response });
  const { data: categories } = await supabase.from('category').select();
  const { data: stickers } = await supabase.from('sticker').select();

  return json({
    categories: categories ?? [],
    stickers: stickers ?? [],
  });
};

export default function SendFeedback() {
  const navigate = useNavigate();
  const { categories, stickers } = useLoaderData<typeof loader>();
  const { supabase } = useOutletContext<SupabaseOutletContext>();

  const [selectedCategory, setSelectedCategory] = useState<
    Database['public']['Tables']['category']['Row']
  >(categories[0]);
  const [selectedSticker, setSelectedSticker] = useState<
    Database['public']['Tables']['sticker']['Row']
  >(stickers[0]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleClickCategory = () => {
    BottomSheet.show({
      Component: (
        <CategorySelectBottomSheet
          categories={categories}
          onClickCategory={setSelectedCategory}
        />
      ),
      maxHeight: 200,
    });
  };

  const sendFeedback = async () => {
    const session = await supabase.auth.getSession();
    const userId = session.data.session?.user.id;
    if (!userId) return;
    const res = await supabase.from('sent_feedback').insert({
      from_user_id: userId,
      anonymous: isAnonymous,
      sticker_id: selectedSticker.id,
      category_id: selectedCategory.id,
      text: textRef.current?.value || '',
    });
    const { error } = res;
    if (error)
      return SnackBar.show({
        title: '피드백 등록에 실패했어요😭',
        visible: true,
      });
    SnackBar.show({ title: '피드백 등록에 성공했어요🤗', visible: true });
    navigate(-1);
  };

  return (
    <Layout.LayoutBase>
      <TopNavigation.NavBar screenName={'피드백 작성'} />
      <Layout.LayoutBase
        padding={`${TopNavigation.NavBar.NAV_BAR_HEIGHT}px 20px 0 20px`}
      >
        <Layout.LayoutBase margin={'0px 0px 20px 0'}>
          <Text.Typo fontType={'KR/Body/L/Medium'}>{'카테고리'}</Text.Typo>
          <CategoryButton {...selectedCategory} onClick={handleClickCategory} />
        </Layout.LayoutBase>
        <Layout.LayoutBase margin={'0px 0px 20px 0'}>
          <Text.Typo fontType={'KR/Body/L/Medium'}>{'스티커'}</Text.Typo>
          {/*TODO(include): 더보기 버튼 추가 필요*/}
          <Layout.Row style={{ flexWrap: 'wrap', gap: 12 }}>
            {stickers.map(s => (
              <StickerButton
                key={s.id}
                {...s}
                isSelected={selectedSticker.id === s.id}
                onClick={() => setSelectedSticker(s)}
              />
            ))}
          </Layout.Row>
        </Layout.LayoutBase>
        <Layout.LayoutBase margin={'0px 0px 20px 0'}>
          <Text.Typo fontType={'KR/Body/L/Medium'}>{'내용'}</Text.Typo>
          <textarea ref={textRef} style={{ width: '100%', height: 200 }} />
        </Layout.LayoutBase>
        <Layout.LayoutBase margin={'0px 0px 20px 0'}>
          <Text.Typo fontType={'KR/Body/L/Medium'}>{'익명'}</Text.Typo>
          <CheckBox
            size={32}
            active={isAnonymous}
            onClick={() => setIsAnonymous(prev => !prev)}
          />
        </Layout.LayoutBase>
      </Layout.LayoutBase>

      <Layout.Absolute
        bottom={0}
        width={'100%'}
        padding={'20px'}
        justifyContent={'center'}
        alignItems={'center'}
        bgColor={'BLACK'}
        style={{ position: 'fixed', cursor: 'pointer' }}
        onClick={sendFeedback}
      >
        <Text.Typo fontType={'KR/Button/M/Bold'} color={'WHITE'}>
          {'피드백 보내기'}
        </Text.Typo>
      </Layout.Absolute>
    </Layout.LayoutBase>
  );
}
