import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import Componen from './Component';
import TextInputComponent from './components/TextInputComponent';

type MyProps = {
};

type post = {
  author : string , 
  created_at : string , 
  objectId : string  , 
  title : string , 
  url : string , 
  _tags : string[]
}

type MyState = {
  posts : post[]  , 
  pageNo : number , 
  searchText : string  , 
  filteredPosts : post[]
};

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item} testID='post-item' >
    <Text style={styles.title}>{title}</Text>
  </View>
);

export class Home extends Component<MyProps , MyState> {
  constructor(props : MyProps){
    super(props)
    this.state = {
      posts : [] , 
      pageNo : 0 , 
      searchText : '' , 
      filteredPosts  :[]
    }
  }

  componentDidMount(): void {
    this.getPosts();
    setInterval(()=> {
      this.getPosts()
    }, 10000)
  }


  onChangeText = (val: string)=> {
    this.setState({
     searchText : val
    })
   
    const filteredData = this.state.posts.filter((post : post)=> post.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || post.author.toLowerCase().includes(this.state.searchText.toLowerCase()) )
    console.log(filteredData);
    this.setState({
     filteredPosts : filteredData
    })
 }



 getPosts=async ()=> {
   try {
     const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageNo}`)
     const data = await res.json()
     this.setState({
       posts : [...this.state.posts, ...data.hits]       
     })
   } catch (error) {
     console.error(error)
   }
    
   this.setState({pageNo : this.state.pageNo + 1})

 }

  

  render() {
    return (
      <View  >
        <Componen data='this is data' />
        <TextInput
          testID={'searchbar'}
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.searchText}
        />
        <FlatList
          testID={'list'}
          data={this.state.searchText === '' ? this.state.posts : this.state.filteredPosts}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.objectId}
        />
      </View>
    )
  }
}

export default Home


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});