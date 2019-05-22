import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './shop-info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IShopInfoProps = T.IProps & T.IShopInfoProps;

@connect(
  store2Props,
  actions
)
class ShopInfo extends Component<IShopInfoProps, T.IShopInfoState> {
  constructor(props: IShopInfoProps) {
    super(props);
  }

  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    /*

*/
    return (
      <View className="shopInfo">
        <View />
      </View>
    );
  }
}

export default ShopInfo as any;
