class Posts {
    static async all(){
       try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`)
        return res.json();
       } catch (error) {
            
       }
    }
}

export default Posts;