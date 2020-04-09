import React from "react";

export const HelpItem = () => {
  return (
    <div className="help-items">
      <div className="help-contents mb-5">
        <h2 className="mb-3">Contents</h2>
        <ol className="pl-3">
          <li>
            <a href="#lorem_ipsum">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#dolor_sit_amet">Dolor sit amet</a>
          </li>
          <li>
            <a href="#consectetur_adipisicing_elit">
              Consectetur adipisicing elit
            </a>
          </li>
          <li>
            <a href="#culpa_eum_iure">Culpa eum iure</a>
          </li>
        </ol>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="lorem_ipsum">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At velit
          error temporibus. Harum, deserunt? Porro id, rem quia qui explicabo
          fugit? Cum dolorum placeat aspernatur tempora tenetur molestiae
          praesentium consequatur iste assumenda, repudiandae sint velit
          possimus perspiciatis veritatis ipsa, quos!
        </p>
        <div className="alert alert-primary" role="alert">
          Ducimus placeat nobis perferendis, dignissimos laborum alias adipisci,
          quia, est ad atque quasi possimus fuga earum veritatis sint impedit!
          Id sed distinctio accusantium aut quasi ab eius sint amet dignissimos
          alias et deleniti voluptatibus non dolor maiores voluptatem, vero ut.
        </div>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="dolor_sit_amet">
        <h2 className="mb-3">Dolor sit amet</h2>
        <dl className="row">
          <dt className="col-sm-3">Description lists</dt>
          <dd className="col-sm-9">
            A description list is perfect for defining terms.
          </dd>

          <dt className="col-sm-3">Euismod</dt>
          <dd className="col-sm-9">
            <p>
              Vestibulum id ligula porta felis euismod semper eget lacinia odio
              sem nec elit.
            </p>
            <p>Donec id elit non mi porta gravida at eget metus.</p>
          </dd>

          <dt className="col-sm-3">Malesuada porta</dt>
          <dd className="col-sm-9">
            Etiam porta sem malesuada magna mollis euismod.
          </dd>

          <dt className="col-sm-3 text-truncate">
            Truncated term is truncated
          </dt>
          <dd className="col-sm-9">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </dd>
        </dl>
      </div>
      <div
        className="help-item mb-5 pb-5 border-bottom"
        id="consectetur_adipisicing_elit"
      >
        <h2 className="mb-3">Consectetur adipisicing elit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eum
          iure, non nobis! Veniam iusto eveniet accusantium distinctio
          asperiores repudiandae id ea expedita facere! Dignissimos, odio?
          Itaque vitae deleniti id animi magni minima perspiciatis aliquid
          atque, placeat a, cupiditate accusantium possimus quaerat adipisci
          nulla. Unde minus exercitationem consequuntur delectus perferendis
          incidunt officiis, quas similique nemo adipisci reiciendis fugit dolor
          itaque. Ducimus placeat nobis perferendis, dignissimos laborum alias
          adipisci, quia, est ad atque quasi possimus fuga earum veritatis sint
          impedit! Id sed distinctio accusantium aut quasi ab eius sint amet
          dignissimos alias et deleniti voluptatibus non dolor maiores
          voluptatem, vero ut.
        </p>
        <blockquote className="blockquote border p-4 mt-3 shadow p-3 bg-white rounded">
          Ducimus placeat nobis perferendis, dignissimos laborum alias adipisci,
          quia, est ad atque quasi possimus fuga earum veritatis sint impedit!
          Id sed distinctio accusantium aut quasi ab eius sint amet dignissimos
          alias et deleniti voluptatibus non dolor maiores voluptatem, vero ut.
        </blockquote>
      </div>
      <div className="help-item mb-5 pb-5 border-bottom" id="culpa_eum_iure">
        <h2 className="mb-3">Culpa eum iure</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eum
          iure, non nobis! Veniam iusto eveniet accusantium distinctio
          asperiores repudiandae id ea expedita facere! Dignissimos, odio?
          Itaque vitae deleniti id animi magni minima perspiciatis aliquid
          atque, placeat a, cupiditate accusantium possimus quaerat adipisci
          nulla. Unde minus exercitationem consequuntur delectus perferendis
          incidunt officiis, quas similique nemo adipisci reiciendis fugit dolor
          itaque.
        </p>
        <div className="alert alert-warning" role="alert">
          Ducimus placeat nobis perferendis, dignissimos laborum alias adipisci,
          quia, est ad atque quasi possimus fuga earum veritatis sint impedit!
          Id sed distinctio accusantium aut quasi ab eius sint amet dignissimos
          alias et deleniti voluptatibus non dolor maiores voluptatem, vero ut.
        </div>
      </div>
    </div>
  );
}
