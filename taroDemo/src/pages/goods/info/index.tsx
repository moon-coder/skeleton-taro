import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import {connect} from '@tarojs/redux';
import './index.less';
import * as T from './types';
import actions from './actions';
import {store2Props} from './selectors';

import TradeInfo from './components/trade-info';

import CustomInfo from './components/custom-info';

import ShopInfo from './components/shop-info';

import Goods from './components/goods';

@connect(
  store2Props,
  actions
)
class GoodsInfo extends Component<T.IProps, any> {
  componentDidMount() {
    /*

*/
    this.props.actions.init();
  }

  componentWillUnmount() {
    this.props.actions.clean();
  }

  render() {
    let {
      actions: {action},
      main,
    } = this.props;

    return (
      <View className="goodsInfo">
        <View />
        heeloo
      </View>
    );
  }
}

export default GoodsInfo as any;
