import axios from "axios";

const retrieveData1 = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const result = await axios.get(
    "https://api-generator.retool.com/3KIZeL/data",
    config
  );
  renderData(result.data);
};

const renderData = (data) => {
  let placeholder = document.getElementById("humans-data");
  let tableHead = document.getElementById("headTable");
  tableHead.innerHTML =
    "<tr>" + "<th>" + "Id" + "</th>" + "<th>" + "Nume" + "</th>" + "</tr>";
  let out = "";
  data.map(function (e) {
    out +=
      "<tr>" + "<td>" + e.id + "</td>" + "<td>" + e.nume + "</td>" + "</tr>";
  });
  placeholder.innerHTML = out;
};

export { retrieveData1 };
