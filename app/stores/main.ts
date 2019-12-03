import { observable, action } from 'mobx'

class MainStore {
  @observable 
  isLoading: boolean = true;

  @action setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  }
}

const store = new MainStore()
export default store
