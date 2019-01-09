import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Right, Body, Button, Icon, List, ListItem, Left, Thumbnail, Switch } from 'native-base';

export default class Consumo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://cdn3.iconfinder.com/data/icons/ico-nic-plug/128/Plug_Power_Socket_Charge_Charging_Voltage_Cable_Connect_Source_Supply_Plug-in_Electric_Electricity_Energy_Ok_Confirm_Complete_Accept_Check_Allow_Available-512.png' }} />
                            </Left>
                            <Body>
                                <Text>Consumo Elétrico</Text>
                                <Text>Status: </Text>
                            </Body>
                            <Right>
                                <Text>220V</Text>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://www.hyiq.org/Images/Buttons/Hamburger%20MENU%20navigation%20round%20rounded%20edges.png' }} />
                            </Left>
                            <Body>
                                <Text>Tensão</Text>
                                <Text>Status: </Text>
                            </Body>
                            <Right>
                                <Switch value={true} />
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://cdn0.iconfinder.com/data/icons/electricity-9/200/353_electricity-512.png' }} />
                            </Left>
                            <Body>
                                <Text>Corrente</Text>
                                <Text>Disponiveis: </Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Bulb-icon.png' }} />
                            </Left>
                            <Body>
                                <Text>Potência</Text>
                                <Text>Status: </Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
module.export = Consumo;