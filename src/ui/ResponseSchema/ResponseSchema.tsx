import React from 'react';
import "./styles.scss";

const ToggleSchema = ({ schema }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="ToggleSchema">
      <div onClick={() => setShow(!show)}>
        <span className="ToggleSchema__title">{schema.title}</span>
        <span className="ToggleSchema__brace">{!show ? '{...}' : ''}</span>
      </div>
      {show && (
        <div style={{ marginTop: '6px' }}>
          <ResponseSchema onlyProps data={schema} />
        </div>
      )}
    </div>
  );
};

interface PropertyProps {
  name: string;
  property: any;
  isRequired: boolean;
};

const Property:React.FC<PropertyProps> = ({ name, property, isRequired }) => {
  return (
    <li className="Property">
      <div className="Property__key">
        {name}
        {isRequired && <span className="Property__required">*</span>}
      </div>
      <div className="Property__values">
        {property.schema ? (
          <ToggleSchema schema={property.schema} />
        ) : (
          <div>
            <div className="Property__type">{property.type}</div>
            {property.description ? (
              <div className="Property__description">
                {property.description}
              </div>
            ) : null}
            {property.example ? (
              <div className="Property__example">
                 Example: {property.example}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </li>
  );
};

interface SchemaProps {
  data: any;
  onlyProps?: boolean;
};

const ResponseSchema:React.FC<SchemaProps> = ({ data, onlyProps }) => {
	return (
	  <div className="Schema">
      {!onlyProps && <span className="Schema__name">{data.title}</span>}
			<span className="Schema__brace">{'{'}</span>
			<ul>
				{Object.keys(data.properties).map((key) => {
          const property = data.properties[key];

          return <Property
            key={key}
            name={key}
            property={property}
            isRequired={data.required ? data.required.indexOf(key) !== -1 : false}
          />;
        })}
			</ul>
      <span className="Schema__brace">{'}'}</span>
		</div>
	);
};

export default ResponseSchema;