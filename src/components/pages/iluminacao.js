import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Content, Right, Body, Button, Icon, List, ListItem, Left, Thumbnail, Switch } from 'native-base';

export default class Iluminacao extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Bulb-icon.png' }} />
                            </Left>
                            <Body>
                                <Text>Lampada Sala</Text>
                                <Text>Status: </Text>
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
                                <Text>Lampada Quarto 1</Text>
                                <Text>Status: </Text>
                            </Body>
                            <Right>
                                <Switch value={true} />
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Bulb-icon.png' }} />
                            </Left>
                            <Body>
                                <Text>Lampada Quarto 2</Text>
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
                                <Text>Lampada Cozinha</Text>
                                <Text>Status: </Text>
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
                                <Text>Lampada Garagem</Text>
                                <Text>Status: </Text>
                            </Body>
                            <Right>
                                <Switch value={true} />
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Bulb-icon.png' }} />
                            </Left>
                            <Body>
                                <Text>Lampada Jardim </Text>
                                <Text>Status: </Text>
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
                                <Text>Lampada Banheiro</Text>
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
module.export = Iluminacao;