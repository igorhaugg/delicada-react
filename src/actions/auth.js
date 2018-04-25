import { firebase, googleAuthProvider } from '../firebase/firebase';
import { confirmAlert } from 'react-confirm-alert';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (email, password) => {
  return () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => {
        const message = e.message.includes('password is invalid')
          ? 'Senha errada'
          : 'Usuário inválido';
        confirmAlert({
          title: 'Error',
          message: `${message}`,
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
      });
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => onClickLogout()
        },
        {
          label: 'No'
        }
      ]
    });
  };
};

const onClickLogout = () => {
  return firebase.auth().signOut();
};
