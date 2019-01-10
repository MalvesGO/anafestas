import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Container, Content, Right, Body, Button, Icon, List, ListItem, Left, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

import init from 'react_native_mqtt';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export default class appBody extends Component {

  constructor(props) {
    super(props);
    
        // const client = new Paho.MQTT.Client('m12.cloudmqtt.com', 10310, 'esp8266');
    // client.onConnectionLost = this.onConnectionLost;
    // client.onMessageArrived = this.onMessageArrived;
    // client.connect({ 
    //   userName: "bpfkktrd",
    //   password: "zdu9SCC_2duo",
    //   onSuccess: this.onConnect
    // });

    const client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'uname');
    client.onConnectionLost = this.onConnectionLost;
    client.onMessageArrived = this.onMessageArrived;
    client.connect({ onSuccess: this.onConnect, useSSL: true });

    this.state = {
      temperatura: '',
      text: ['...'],
      client,
    };
  }

  pushText = entry => {
    const { text } = this.state;
    this.setState({ text: [...text, entry] });
  };

  onConnect = () => {
    const { client } = this.state;
    client.subscribe('WORLD');
    this.pushText('Conectado com sucesso');
  };

  onConnectionLost = responseObject => {
    if (responseObject.errorCode !== 0) {
      this.pushText(`Conexao perdida: ${responseObject.errorMessage}`);
    }
  };

  onMessageArrived = message => {
    this.pushText(`Nova mensagem: ${message.payloadString}`);
    this.pushText(`Nova mensagem: ${message.destinationName}`);

    if (message.destinationName == 'WORLD') {
      console.log(message.payloadString);

      this.setState({
        temperatura: message.payloadString
      })


      this.pushText(`Nova mensagem alterada: ${message.destinationName}`);
    } else {
      this.pushText(`Nada encontrado aqui`);
    }

  };


  render() {

    const { text } = this.state;

    return (
      <Container>
        <Content>
          <View>
            {text.map(entry => <Text>{entry}</Text>)}
          </View>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/door-128.png' }} />
              </Left>
              <Body>
                <Text>Portas e Janelas</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Icon active name="md-arrow-round-forward" />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/motion-291349.png' }} />
              </Left>
              <Body>
                <Text>Sensor Presença</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Icon active name="md-arrow-round-forward" />
              </Right>
            </ListItem>
            <ListItem thumbnail onPress={Actions.iluminacao}>
              <Left>
                <Thumbnail square source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Bulb-icon.png' }} />
              </Left>
              <Body>
                <Text>Lampadas</Text>
                <Text>Disponiveis: </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ fontWeight: "bold" }}>8</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.qinetwork.com.br/wp-content/uploads/2015/12/clouds.png' }} />
              </Left>
              <Body>
                <Text>Temperatura</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ fontWeight: "bold" }}>{this.state.temperatura}°C</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://www.sigam.ambiente.sp.gov.br/sigam3/imagens/logo/forest.png' }} />
              </Left>
              <Body>
                <Text>Umidade</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text style={{ fontWeight: "bold" }}>{this.state.temperatura}%</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail onPress={Actions.consumo}>
              <Left>
                <Thumbnail square source={{ uri: 'http://free-icon-download.com/modules/PDdownloads/images/screenshots/hazard-sign-images-electricity.png' }} />
              </Left>
              <Body>
                <Text>Consumo Elétrico</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Icon active name="md-arrow-round-forward" />
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://lastcall.org/wp-content/uploads/2018/12/GPS-Navigation.png' }} />
              </Left>
              <Body>
                <Text>Localizar Carro</Text>
                <Text>Status: </Text>
              </Body>
              <Right>
                <Icon active name="md-arrow-round-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

module.export = appBody;
