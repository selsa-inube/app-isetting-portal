import { IAssignmentsData } from "@ptypes/assignments/IAssignmentsData";
import { formatDateTable } from "@utils/formatDateTable";

const mapAssignmentsToEntity = (data: IAssignmentsData): IAssignmentsData => {
  const newData: IAssignmentsData = {
    id: String(data.assignmentId),
    assignmentDate: String(data.assignmentDate),
    assignmentDescription: String(data.assignmentDescription),
    assignmentEndDate: String(data.assignmentEndDate),
    assignmentId: String(data.assignmentId),
    assignmentType: String(data.assignmentType),
    businessManagerCode: String(data.businessManagerCode),
    businessManagerName: String(data.businessManagerName),
    nameOfAbsentStaff: String(data.nameOfAbsentStaff),
    staffIdentificationNumber: String(data.staffIdentificationNumber),
    staffLastName: String(data.staffLastName),
    staffName: String(data.staffName),
    temporaryRolesByBusinessUnit: Object(data.temporaryRolesByBusinessUnit),
    assignmentDateFormat: formatDateTable(
      new Date(String(data.assignmentDate))
    ),
    assignmentEndDateFormat: formatDateTable(
      new Date(String(data.assignmentEndDate))
    ),
    officialName: String(
      data.nameOfAbsentStaff
        ? `${data.staffName} ${data.staffLastName} -> ${data.nameOfAbsentStaff}`
        : data.officialName
    ),

    code: String(data.nameOfAbsentStaff),
    value: String(data.nameOfAbsentStaff),
  };

  return newData;
};

export { mapAssignmentsToEntity };
