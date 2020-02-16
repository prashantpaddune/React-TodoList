import React from 'react';
import { Layout, Row,} from 'antd';

import AddItem from './AddItem';
import ItemList from './ItemList';

const { Content } = Layout;

class Main extends React.Component {
  render() {
    return (
        <Content>
      <Layout>
          <Row style={{
                marginTop:'10%',
                width: '100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              // span={12}
            >
              <AddItem />
          </Row>
            <Row style={{
                width: '100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                 // span={12}
            >
              <ItemList />
            </Row>

      </Layout>
        </Content>
    )
  }
}

export default Main;