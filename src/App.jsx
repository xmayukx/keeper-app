import Header from "./partials/Header";
import Footer from "./partials/footer";
import Note from "./components/Note";
import notes from "./Notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((memo)=>{
        return (<Note head={memo.title} body={memo.content} />);
      })}
      <Footer />
    </div>
  );
}

export default App;
