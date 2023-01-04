import Header from '../Header';
import NewsDetails from '../contentBlocks/page8NewsDetails';
import WriteComment from '../contentBlocks/page8WriteComment';
import Page8Related from '../contentBlocks/page8News';
import Footer from '../Footer';

export const NewsDetails_08 = () => { // page 8
    return (
        <section>
            <Header />
            <NewsDetails />
            <WriteComment />
            <Page8Related />
            <div style={{ marginTop: '100px' }}>
                <Footer />
            </div>
        </section>
    );
};