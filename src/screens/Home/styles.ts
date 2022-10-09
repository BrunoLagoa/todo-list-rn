import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -28,
    marginBottom: 32,
    paddingHorizontal: 24,
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#1f1e25',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
  },

  wrapperStatus: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 32,
  },

  contentStatusDetail: {
    flexDirection: 'row',
  },

  statusCreatedText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#4EA8DE',
    marginRight: 8,
  },

  statusTotal: {
    width: 32,
    height: 19,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
  },

  statusTotalText: {
    color: '#D9D9D9',
    fontSize: 12,
    lineHeight: 15,
    alignSelf: 'center',
  },

  statusFinishText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#8284FA',
    marginRight: 8,
  },

  listEmptyContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },

  listEmptyWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },

  listEmptyTitleText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: 16,
    color: '#808080',
  },

  listEmptySubTitleText: {
    color: '#808080',
    fontSize: 16,
  },

  taskContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },

  taskContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },

  taskDescription: {
    flex: 1,
    justifyContent: 'center',
    height: 64,
    marginHorizontal: 8,
  },

  taskDescriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#F2F2F2',
  },
});
