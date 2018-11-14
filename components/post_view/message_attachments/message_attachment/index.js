// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {doPostAction} from 'mattermost-redux/actions/posts';

import MessageAttachment from './message_attachment';

function mapStateToProps(state) {
    return {
        pluginActions: state.plugins.actions,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            doPostAction,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageAttachment);
