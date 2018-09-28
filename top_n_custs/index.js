const data = require('./data.json');

function getTopNCustomers(orders, n = 30) {
  const counts = {};

  data.forEach(datum => {
    const { name } = datum.customer;

    counts[name] = counts[name] || {
      name,
      count: 0,
    };
    counts[name].count += 1;
  });

  return Object.keys(counts)
    .map(name => counts[name])
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

console.log('top N \n', getTopNCustomers(data));
