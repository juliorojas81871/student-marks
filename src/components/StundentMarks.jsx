import React, { useState, useMemo } from "react";

const StundentMarks = () => {
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);
  const [tot, setTot] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGrade = (e) => {
    e.preventDefault();
    const total = Number(m1) + Number(m2) + Number(m3);
    setTot(total);
    const avg = Number(total / 3);
    setAverage(avg);
  };

  const letterGrade = useMemo(() => {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 65) return "D";
    else return "F";
  }, [average]);

  return (
    <div className="container">
      <h1>Test Grader</h1>
      <form onSubmit={handleGrade}>
        <div className="input-row">
          <label htmlFor="test1">Test 1</label>
          <input
            type="number"
            max={100}
            min={0}
            placeholder="Test 1"
            value={m1}
            id="test1"
            onChange={(e) =>
              setM1(
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value
              )
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="test2">Test 2</label>
          <input
            type="number"
            placeholder="Test 2"
            value={m2}
            id="test2"
            onChange={(e) =>
              setM2(
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value
              )
            }
          />
        </div>
        <div className="input-row">
          <label htmlFor="tes31">Test 3</label>
          <input
            type="number"
            placeholder="Test 3"
            value={m3}
            id="test3"
            onChange={(e) =>
              setM3(
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value
              )
            }
          />
        </div>
        <div className="placement-btn">
          <button className="btn">Submit</button>
        </div>
      </form>
      {tot !== 0 && average !== 0 ? (
        <div className="result">
          <div>
            <p className="label">Total Grade</p>
            <p className="result">{tot}</p>
          </div>
          <div>
            <p className="label">Average Grade</p>
            <p className="result">{average.toFixed(0)}</p>
          </div>
          <div>
            <p className="label">Letter Grade</p>
            <p className="result">{letterGrade}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default StundentMarks;
