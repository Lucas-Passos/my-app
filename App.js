import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Alert,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

export default function LoginScreen() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    // Lógica para verificar se os campos estão preenchidos 
    const isButtonDisabled = email.trim() === '' || password.trim() === '';

    // Função para lidar com o clique no botão de login 
    const handleLogin = () => {
        Alert.alert('Sucesso!', 'Login realizado com sucesso!');
    };

    // Função para lidar com o clique no link de registro 
    const handleRegister = () => {
        Alert.alert('Aviso', 'Tela de Registro em breve!');
    };

    // Função para lidar com o clique no link de redefinição de senha 
    const handleResetPassword = () => {
        Alert.alert('Aviso', 'Tela de redefinição de senha em breve!');
    };

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View style={styles.content}>

                {/* Imagem do logo ou do app */}
                <Image
                    source={{ uri: 'https://picsum.photos/200' }}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Rótulo e campo de entrada para o e-mail */}
                <Text style={styles.label}>E-mail</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                {/* Rótulo e campo de entrada para a senha */}
                <Text style={styles.label}>Senha</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Botão de login */}
                <Button
                    title="ENTRAR"
                    onPress={handleLogin}
                    disabled={isButtonDisabled}
                    color="#1E90FF"
                />

                {/* Container para os links de registro e redefinição de senha */}
                <View style={styles.linkContainer}>

                    {/* Link para registrar-se */}
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.link}>Registrar-se</Text>
                    </TouchableOpacity>

                    {/* Link para redefinir a senha */}
                    <TouchableOpacity onPress={handleResetPassword}>
                        <Text style={styles.link}>Redefinir a Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
        justifyContent: 'center',
        padding: 20,
    },

    content: {
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },

    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 24,
        borderRadius: 60,
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },

    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },

    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    link: {
        color: '#1E90FF',
        textDecorationLine: 'underline',
    },
});
