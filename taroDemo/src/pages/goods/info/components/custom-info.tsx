import {View, Button, Text} from '@tarojs/components';
import Taro, {Component, Config} from '@tarojs/taro';

import * as T from '../types';
import './custom-info.less';
import actions from '../actions/index';
import {connect} from '@tarojs/redux';
import {store2Props} from '../selectors';

type ICustomInfoProps = T.IProps & T.ICustomInfoProps;

@connect(
  store2Props,
  actions
)
class CustomInfo extends Component<ICustomInfoProps, T.ICustomInfoState> {
  constructor(props: ICustomInfoProps) {
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
      <View className="customInfo">
        <View />
      </View>
    );
  }
}

export default CustomInfo as any;
