import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Header, Left, Button, Icon, Title, Body, Right } from 'native-base';

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Kaverna Digital</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
module.export = AppHeader;