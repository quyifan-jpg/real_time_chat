import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { BsSearch } from "react-icons/bs";
 const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const getChannels = async (text) => {
        try {
            console.log("search")
            // const channelResponse = client.queryChannels({
            //     type: 'team', 
            //     name: { $autocomplete: text }, 
            //     members: { $in: [client.userID]}
            // });
            // const userResponse = client.queryUsers({
            //     id: { $ne: client.userID },
            //     name: { $autocomplete: text }
            // })

            // const [channels, { users }] = await Promise.all([channelResponse, userResponse]);

            // if(channels.length) setTeamChannels(channels);
            // if(users.length) setDirectChannels(users);
        } catch (error) {
            setQuery('')
        }
    }

    const onSearch = (event) => {
        // event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value)
    }
  return (
    <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-serach__input__icon">
                        <BsSearch/> 
              </div>
                <input 
                    className="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query}  
                    onChange={onSearch}
                />
            </div>
        </div>
  )
}

export default ChannelSearch