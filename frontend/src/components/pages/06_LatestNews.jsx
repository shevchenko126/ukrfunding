import { useState, useEffect } from 'react';
import Header from '../Header';
import AkcelNews_page7 from '../contentBlocks/page7AkcelNews';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';

export const LatestNews_07 = () => { // page 7

    const newsAll = [
        {
            category: 'technology',
            title: 'New vaccine for cattle protects against fetal calf loss from EBA – anatomy of..',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1bvnty',
        },
        {
            category: 'education',
            title: '4 Things parents learned for they jids in 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Hawkins Junior',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: 'c1hgxc',
        },
        {
            category: 'videos',
            title: 'He Created the Web. Now He’s Out to Remake the Digital World.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Melinda Humbles',
            timeRead: '24min read',
            date: 'November 21th, 2020',
            slug: '1gfh554',
        },
    ];

    const selectValues = [
        { value: 'all', label: 'All Categories' },
        { value: 'technology', label: 'Technology' },
        { value: 'education', label: 'Education' },
        { value: 'videos', label: 'Videos' },
        { value: 'medical', label: 'Medical' },
    ];

    const [news, _] = useState(newsAll);
    const [filteredNews, setFilteredNews] = useState(news);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(selectValues[0]);

    useEffect(() => {
        let data = news;
        if (inputValue) {
            data = data.filter((news) => news.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
        }
        if (selectValue.value !== 'all') {
            data = data.filter((news) => news.category.includes(selectValue.value));
        }
        setFilteredNews(data);
    }, [inputValue, selectValue]);


    return (
        <section>
            <Header />
            <AkcelNews_page7
                news={filteredNews}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

                selectValues={selectValues}

                selectValue={selectValue}
                changeSelectValue={(e) => setSelectValue(e)}
            />
            <DontMiss />
            <Footer />
        </section>
    );
};