import React, {Component} from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class appFooter extends Component {

  tabAction(tab){
    if(tab === 'iluminacao'){
      Actions.iluminacao();
    }else if(tab === 'consumo'){
      Actions.consumo();
    } else if(tab === 'home'){
      Actions.home();
    }
  }
  
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="md-bulb" onPress={() =>{this.tabAction('iluminacao')}}/>
                    </Button>
                    <Button>
                        <Icon name="md-home" onPress={() =>{this.tabAction('home')}}/>
                    </Button>
                    <Button >
                        <Icon active name="md-contact" onPress={() =>{this.tabAction('consumo')}}/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
module.export = appFooter;