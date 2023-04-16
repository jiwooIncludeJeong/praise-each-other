import type { FC } from 'react';
import React from 'react';
import { Layout } from '@components/design-system';
import CategoryButton from '@components/feedback/CategoryButton/CategoryButton';
import { useBottomSheetContext } from '@components/design-system/BottomSheet/BottomSheetContextProvider';
import type { Database } from 'src/types';

const CategorySelectBottomSheet: FC<CategorySelectBottomSheetProps> = props => {
  const { categories, onClickCategory } = props;
  const { close } = useBottomSheetContext();

  return (
    <Layout.Row padding={'0 20px'} style={{ gap: 12, flexWrap: 'wrap' }}>
      {categories.map(c => (
        <CategoryButton
          key={c.id}
          {...c}
          onClick={() => {
            onClickCategory(c);
            close();
          }}
        />
      ))}
    </Layout.Row>
  );
};

type CategorySelectBottomSheetProps = {
  categories: Database['public']['Tables']['category']['Row'][];
  onClickCategory: React.Dispatch<
    React.SetStateAction<Database['public']['Tables']['category']['Row']>
  >;
};

export default CategorySelectBottomSheet;
