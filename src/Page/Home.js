const Home = () => {
  return (
    <div>
      <UncontrolledExample />
      <Intro />
      <Section />
      <Pilihan />
      <News />
      <NewsCar />
      <container class="d-flex justify-content-center m-5">
        <Button variant="primary" class>
          Show All
        </Button>
        {""}
      </container>
      <DataMenu />
      <Join />
    </div>
  );
};
export default Home;
