import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',

    top: 0,
    left: 0,

    justifyContent: 'flex-end',
  },
  container: {
    height: '82%',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  box: {
    position: 'relative',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],

    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  addBtn: {
    position: 'relative',
    left: 107,
    top: 81,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 100,
    width: 25,
    height: 25,
  },
  addBtnText: {
    color: '#FF6C00',
    textAlign: 'center',
  },
});
