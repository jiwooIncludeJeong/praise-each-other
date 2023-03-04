import { Subject, timer } from 'rxjs';
import type { BottomSheetParams } from '@components/design-system/BottomSheet/BottomSheet.types';
import type { SnackBarParams } from '@components/design-system/SnackBar/SnackBar.types';
import type { PopUpParams } from '@components/design-system/PopUp/PopUp.types';

const globalComponentFactory = <T>() => {
  let isScreenInUse = true;

  const observable = new Subject<T>();
  const renderList: T[] = [];

  const next = (nextComponent: T) => {
    if (isScreenInUse) {
      return renderList.push(nextComponent);
    }

    isScreenInUse = true;
    observable.next(nextComponent);
  };

  const complete = (delay2next?: number) => {
    const nextComponent = renderList.shift();

    if (nextComponent) {
      timer(delay2next ?? 300).subscribe(() => {
        isScreenInUse = true;
        observable.next(nextComponent);
      });
      return;
    }

    isScreenInUse = false;
  };

  const flush = () => {
    while (renderList.length) renderList.pop();
    if (isScreenInUse) complete();
  };

  return {
    observable,
    next,
    complete,
    flush,
  };
};

const stackableGlobalComponentFactory = <T>() => {
  const observable = new Subject<T>();

  const next = (nextComponent: T) => {
    observable.next(nextComponent);
  };

  return {
    observable,
    next,
  };
};

const globalComponents$ = globalComponentFactory<GlobalComponentGroup>();
const globalBottomSheet$ = globalComponentFactory<BottomSheetComponentGroup>();
const globalSnackBar$ =
  stackableGlobalComponentFactory<SnackBarComponentGroup>();

type GlobalComponentGroup = PopUpParams;
type BottomSheetComponentGroup = BottomSheetParams;
type SnackBarComponentGroup = SnackBarParams;

export { globalComponents$, globalSnackBar$, globalBottomSheet$ };
