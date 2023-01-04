import OneNews from '../Items/OneNews';

const Page8RelatedNews = (props) => {

    return (
        <section className='container'>
            <h2>Related Articles</h2>
            <div>
                <section className="row">
                    {props.news.map((news) => (
                        <OneNews news={news} />
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Page8RelatedNews;