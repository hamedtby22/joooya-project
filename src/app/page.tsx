import CardList from "@/components/advantages/Advantages";
import CardItems from "@/components/card/CardItems";
import Map from "@/components/map/Map";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import FeedbackForm from "@/components/comments/Comments";
import Footer from "@/components/foooter/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-violet-50  ">
        <Map />
        <Search />
        <CardItems />
        <CardList />
        <FeedbackForm />
        <Footer />
      </div>    
    </div>
  );
}
