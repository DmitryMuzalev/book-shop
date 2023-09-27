import { AuthorsBook } from '../../components/AuthorsBook/AuthorsBook';
import { Partners } from '../../components/Partners/Partners';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Subscription } from '../../components/Subscription/Subscription';
import { AuthorInfo } from './AuthorInfo/AuthorInfo';
import { MyStory } from './MyStory/MyStory';

function About() {
  return (
    <>
      <section className="page-description">
        <div className="container">
          <SectionTitle>
            <h1 className="page-description__title">About Author</h1>
            <p className="page-description__text">
              Here you can discover how Pages reach this boundary and having{' '}
              <br /> a grown on the principles of writing and the reading.
            </p>
          </SectionTitle>
        </div>
      </section>
      <AuthorInfo />
      <MyStory />
      <AuthorsBook isBlueBg={true} />
      <Partners />
      <Subscription />
    </>
  );
}
export { About };
