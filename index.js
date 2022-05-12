const serverUrl = "https://u98obhtxsafw.usemoralis.com:2053/server";
const appId = "2afsUQAh7uOLe7hCjZVKOjp0hTWHGxFCMVVbCj4e";
Moralis.start({ serverUrl, appId });

/**
 * @description Get Portfolio of an Address (SOL, SPL Token, SPL NFT address)
 *
 */

var portfolio;
var balance;


// getPortfolio - Returns the portfolio (SOL balance, SPL token blanace, SPL NFT balance) of an address.
const getSolanaPortfolio = async () => {
  const options = {
    network: "devnet",
    address: "HnswHirc5xQngrefpwWicjwDHXtYb2ib5ArQuU7gH8QX",
  };
  portfolio = await Moralis.SolanaAPI.account.getPortfolio(options);

  console.log('portfolio', portfolio);
  if (portfolio !== undefined) {
    const result = document.getElementById("result");
    // document.getElementById("get-portfolio").innerHTML = portfolio.nativeBalance.solana;
    const newDiv = document.createElement("div");
    console.log(portfolio.nativeBalance.solana)
    newDiv.innerHTML = portfolio.nativeBalance.lamports + "<br><br>" + portfolio.nativeBalance.solana;
    result.appendChild(newDiv)

  }
};

document.getElementById("get-portfolio").onclick = getSolanaPortfolio;




// balance - Returns SOL balance of an address. ----------------------------------->
const getSolanaBalance = async () => {
  const options = {
    network: "devnet",
    address: "HnswHirc5xQngrefpwWicjwDHXtYb2ib5ArQuU7gH8QX",
  };

  balance = await Moralis.SolanaAPI.account.balance(options);

  console.log('balance', balance);
  if (balance !== undefined) {

    const balanceResult = document.getElementById("balanceResult");
    const balanceDiv = document.createElement("div");
    balanceDiv.innerHTML = "Lamports - " + balance.lamports + "<br><br>" + balance.solana;
    balanceResult.appendChild(balanceDiv)
  }
};
document.getElementById("get-balance").onclick = getSolanaBalance;



// getSPL - Returns SPL token balance of an address. ----------------------------------->
const getSPL = async () => {
  const options = {
    network: "devnet",
    address: "HnswHirc5xQngrefpwWicjwDHXtYb2ib5ArQuU7gH8QX",
  };
  const getspl = await Moralis.SolanaAPI.account.getSPL(options);

  console.log('getSPL', getspl);
};

document.getElementById("get-spl").onclick = getSPL;


// getNFTs - Returns SPL NFT balance of an address. ----------------------------------->
const getNft = async () => {
  const options = {
    network: "devnet",
    address: "HnswHirc5xQngrefpwWicjwDHXtYb2ib5ArQuU7gH8QX",
  };
  const nfts = await Moralis.SolanaAPI.account.getNFTs(options);
  console.log('getNFT', nfts);
};

document.getElementById("get-nfts").onclick = getNft;