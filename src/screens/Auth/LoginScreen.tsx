import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
/* import {loginUser} from '../../services/api'; */

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      /*  const data = await loginUser(username, password); */
      /*  Alert.alert('Login Successful', `Welcome, ${data.username}`); */
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={loading ? 'Loading...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
