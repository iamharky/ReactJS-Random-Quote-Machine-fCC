const getData = async () => {
  return await fetch("https://type.fit/api/quotes").then(response => response.json());
};

const App = () => {
  const [quotes, setQuotes] = React.useState();
  const [quote, setQuote] = React.useState({ text: 'Quote', author: 'Author' });

  React.useEffect(() => {
    getData().then(res => {
      setQuotes(res);
      let rnd = Math.floor(Math.random() * res.length);
      setQuote(res[rnd]);
    });
  }, []);

  const setRandom = () => {
    let len = quotes.length;
    let rnd = Math.floor(Math.random() * len);
    setQuote(quotes[rnd]);
  };

  return (
    React.createElement("div", { id: "quote-box" },
    React.createElement("p", { id: "text" }, "\u201C", quote.text, "\u201D"),
    React.createElement("p", { id: "author" }, "-", quote.author, "-"),
    React.createElement("div", { id: "buttons" },
    React.createElement("button", { id: "new-quote", onClick: () => setRandom() }, "GET RANDOM"),
    React.createElement("a", { id: "tweet-quote", href: `https://twitter.com/intent/tweet?text=` + encodeURIComponent('"' + quote.text + '" ' + quote.author) }, React.createElement("i", { class: "fab fa-twitter-square" })))));



};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));