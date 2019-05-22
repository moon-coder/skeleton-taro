import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './trade-info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type ITradeInfoProps = T.IProps & T.ITradeInfoProps;

@connect(
  store2Props,
  actions
)
class TradeInfo extends Component<ITradeInfoProps, T.ITradeInfoState> {
  constructor(props: ITradeInfoProps) {
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
      <View className="tradeInfo">
        <View />
      </View>
    );
  }
}

export default TradeInfo as any;
