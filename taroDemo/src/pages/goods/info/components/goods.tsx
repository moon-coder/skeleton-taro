import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './goods.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type IGoodsProps = T.IProps & T.IGoodsProps;

@connect(
  store2Props,
  actions
)
class Goods extends Component<IGoodsProps, T.IGoodsState> {
  constructor(props: IGoodsProps) {
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
      <View className="goods">
        <View />
      </View>
    );
  }
}

export default Goods as any;
