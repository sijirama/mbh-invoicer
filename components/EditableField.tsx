import React, { ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

interface CellData {
    type: string;
    name: string;
    placeholder?: string;
    value: string | number;
    id: string;
    min?: number;
    step?: string;
    precision?: number ;
    textAlign?: string;
    leading?: string | null;
}

interface EditableFieldProps {
    cellData: CellData;
    onItemizedItemEdit: (event: ChangeEvent<HTMLInputElement>) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({ cellData, onItemizedItemEdit }) => {
    return (
        <InputGroup className="my-1 flex-nowrap">
            {cellData.leading != null && (
                <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
                    <span
                        className="border border-secondary rounded-circle d-flex align-items-center justify-content-center small"
                        style={{ width: "20px", height: "20px" }}
                    >
                        {cellData.leading}
                    </span>
                </InputGroup.Text>
            )}
            <Form.Control
                className={cellData.textAlign || ''}
                type={cellData.type}
                placeholder={cellData.placeholder}
                min={cellData.min}
                name={cellData.name}
                id={cellData.id}
                value={cellData.value}
                step={cellData.step}
                //precision={cellData?.precision}
                aria-label={cellData.name}
                onChange={onItemizedItemEdit}
                required
            />
        </InputGroup>
    );
};

export default EditableField;

