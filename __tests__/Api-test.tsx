import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {Home} from '../Home';
import Posts from '../Posts';


const mockData = {
    "hits": [
        {
            "created_at": "2023-06-14T13:03:56.000Z",
            "title": "AI generated debate between Trump and Biden (NSFW)",
            "url": "https://www.twitch.tv/trumporbiden2024",
            "author": "Fervicus",
        }
    ]
}

it('Fetch api mock' ,async ()=> {
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            json: function () {
              return {
                hits: mockData,
              };
            },
          });
        });
    });

    const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`)
    const data = await res.json()
    
    console.log(data.hits.hits[0].author);
    expect(data.hits.hits[0].author).toEqual("Fervicus");
})


// it('Home component', async () => {
//     const homeRenderer = renderer.create(<Home />);
//     const homeInstance = homeRenderer.getInstance();
//     await homeInstance.getPosts()
//     console.log(homeInstance.state.posts.hits[0].title)
//     await waitFor(()=> {
//         console.log(homeInstance.state.posts[0])
//         expect(homeInstance.state.posts[0].points).toEqual("1");
//     })
//     homeRenderer.unmount();
// });

