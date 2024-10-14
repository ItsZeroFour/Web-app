import React from "react";
import style from "./style.module.scss";
import japan from "../../assets/images/education/japan.png";
import usa from "../../assets/images/education/usa.png";
import person from "../../assets/images/after-chat-4.png";
import { Link } from "react-router-dom";

const Education2 = () => {
  return (
    <section className={style.education}>
      <div className="container">
        <div className={`wrapper ${style.education__wrapper}`}>
          <div className={style.education2__dates}>
            <div className={style.education2__items}>
              <div className={style.education2__item}>
                <p>Upcoming</p>
              </div>

              <div className={style.education2__item}>
                <p>Past</p>
              </div>
            </div>

            <ul>
              <li>
                <p>Tue</p>
                <p>24</p>
              </li>

              <li>
                <p>Wed</p>
                <p>25</p>
              </li>

              <li>
                <p>Thu</p>
                <p>26</p>
              </li>

              <li>
                <p>Fri</p>
                <p>27</p>
              </li>

              <li>
                <p>Sat</p>
                <p>28</p>
              </li>

              <li>
                <p>Sun</p>
                <p>29</p>
              </li>

              <li>
                <p>Mon</p>
                <p>30</p>
              </li>
            </ul>
          </div>

          <ul className={style.education__news}>
            <li>
              <div>
                <p>Today</p>
                <img src={japan} alt="japan" />
              </div>
              <p>Tokyo CPI</p>
            </li>

            <li>
              <div>
                <p>Tomorrow</p>
                <img src={usa} alt="usa" />
              </div>
              <p>Fed’s Chair Powell Speech</p>
            </li>

            <li>
              <div>
                <p>Tomorrow</p>
                <img src={usa} alt="usa" />
              </div>
              <p>Monthly consumer price index</p>
            </li>
          </ul>

          <div
            className={`${style.education__person} ${style.education__person_2}`}
          >
            <img src={person} alt="person" />

            <div>
              <h3>Mohammed Shami</h3>
              <p>
                The Non-Farm Payrolls (NFP) report shows U.S. job growth outside
                farming. It causes big market moves and signals economic health.
              </p>
            </div>
          </div>

          <Link to="/">Non-farm? What is it?</Link>
        </div>
      </div>
    </section>
  );
};

export default Education2;
