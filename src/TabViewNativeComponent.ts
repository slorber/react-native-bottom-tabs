import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native';
import type {
  DirectEventHandler,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';
//@ts-ignore
import type { ImageSource } from 'react-native/Libraries/Image/ImageSource';

export type OnPageSelectedEventData = Readonly<{
  key: string;
}>;

export type TabViewItems = ReadonlyArray<{
  key: string;
  title: string;
  sfSymbol?: string;
  badge?: string;
}>;

export interface TabViewProps extends ViewProps {
  items: TabViewItems;
  selectedPage: string;
  onPageSelected?: DirectEventHandler<OnPageSelectedEventData>;
  tabViewStyle?: WithDefault<'automatic' | 'sidebarAdaptable', 'automatic'>;
  icons?: ReadonlyArray<ImageSource>;
}

export default codegenNativeComponent<TabViewProps>('RCTTabView');
