import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const data1 = {
    labels: ["completed", "not completed"],
    datasets: [
      {
        data: [props.completed, props.total - props.completed],
        backgroundColor: ["#5285EC", "#E8ECEC"],
        hoverBackgroundColor: ["#5285EC", "#E8ECEC"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "title",
    },
    legend: {
      position: "bottom",
      defaultFontFamily: "Lato",
      align: "center",
      labels: {
        usePointStyle: true,
        fontSize: 10,
        padding: 30,
      },
    },
  };
  return <Pie data={data1} options={options} />;
};

PieChart.propTypes = {
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default PieChart;
