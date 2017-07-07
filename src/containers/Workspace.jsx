import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import WebView from '../components/WebView';

const Container = glamorous.div({ width: '100%', height: '100%', position: 'relative' });

class Workspace extends Component {
  state = {
    showDashboard: true,
  };

  setRef = id => (ref) => {
    this.apps[id] = ref;
    // Mobile User Agent (TODO: Change the User Agent depending the size of the screen)
    // ref.setUserAgent(
    //   'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K)
    // AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    // );
  };

  apps = {};

  render = () =>
    (<Container>
      {this.props.apps.map(({ id, url, selected }) =>
        (<WebView
          key={`webview_${id}`}
          id={id}
          innerRef={this.setRef(id)}
          src={url}
          active={selected}
        />),
      )}
    </Container>);
}

export default connect(({ apps }) => ({ apps }))(Workspace);
