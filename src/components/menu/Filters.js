import FiltersCheckbox from './FiltersCheckbox';
import PriceRange from './PriceRange';
import ButtonsSection from './ButtonsSection';

const Filters = () => {
  const currentBrands = [
    'Podium',
    'Penguin',
    'Skechers',
    'Lambretta',
    'Beckett',
    'Cotswold',
    'Amblers',
    'Bottesini',
    'Earth Works',
    'CAT',
    'Groundwork',
  ];
  const currentCategories = ['Sneaker', 'Oxford', 'Boot'];
  const currentSizes = [38, 39, 40, 41, 42];

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-modalColor">
      <div className="
        bg-neutral-50 
        rounded-md 
        mx-auto 
        mt-14 
        sm:mt-20 
        px-4 
        py-6 
        w-fit 
        h-3/4 
        overflow-y-scroll">
        <section className="filter_section">
          <h2 className="filter_h2">Brand</h2>
          <FiltersCheckbox items={currentBrands} />
        </section>

        <section className="filter_section">
          <h2 className="filter_h2">Category</h2>
          <FiltersCheckbox items={currentCategories} />
        </section>

        <section className="filter_section">
          <h2 className="filter_h2">Size</h2>
          <FiltersCheckbox items={currentSizes} />
        </section>

        <section className="filter_section">
          <h2 className="filter_h2">Price</h2>
          <PriceRange />
        </section>

        <section className="filter_section">
          <ButtonsSection />
        </section>
      </div>
    </div>
  );
};

export default Filters;
