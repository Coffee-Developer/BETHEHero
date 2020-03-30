import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';
export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá poderia me ajudar no caso "Tomar uma no barzinho" no valor de R$100,00 ';
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Tomar uma no barzinho',
            recipients: ['dede100cmts123@gmail.com'],
            body: message,
        });
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=558894472628=${message}`);
    };
    return (
    <View style = {styles.container}>
        <View style={styles.header}>
        <Image source = {logoImg}/>
        
        <TouchableOpacity onPress={navigateBack}>
            <Feather name ="arrow-left" size={28} color= "#E82041"/>
        </TouchableOpacity>

        </View>
        <View style= {styles.incident}>
            <Text style = {[ styles.incidentProperty, {marginTop : 0}]}>ONG:</Text>
             <Text style = { styles.incidentValue}>APAD</Text>

            <Text style = { styles.incidentProperty}>CASO:</Text>
             <Text style = { styles.incidentValue}>Tomar uma no barzinho</Text>
                
            <Text style = { styles.incidentProperty}>VALOR:</Text>
             <Text style = { styles.incidentValue}>R$ 120,00</Text>
          
        </View>
        <View style = {styles.contactBox}>
            <Text style = { styles.heroTitle}>Salve o dia!</Text>
            <Text style = { styles.heroTitle}>Seja o herói desse caso.</Text>
          
            <Text style = { styles.heroDescription}>Entre em contato:</Text>
            <View style = {styles.actions}>
                <TouchableOpacity style = {styles.action} onPress = {sendWhatsapp}>
                    <Text style = {styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.action} onPress = {sendMail}>
                    <Text style = {styles.actionText}>E-mail</Text>
                </TouchableOpacity>
                
            </View>


        </View>
    </View>
    );
}