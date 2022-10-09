import axios from "axios";

const retrieveData2 = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const result = await axios.get(
    "https://api-generator.retool.com/hXoTWu/data",
    config
  );
  renderData(result.data);
};

const renderData = (data) => {
  let placeholder = document.getElementById("humans-data");
  let tableHead = document.getElementById("headTable");
  tableHead.innerHTML =
    "<tr>" + "<th>" + "Tara" + "</th>" + "<th>" + "Oras" + "</th>" + "</tr>";
  let out = "";
  data.map(function (e) {
    out +=
      "<tr>" +
      "<td>" +
      e.Country +
      "</td>" +
      "<td>" +
      e.City +
      "</td>" +
      "</tr>";
  });
  placeholder.innerHTML = out;
};

export { retrieveData2 };
