const Document = require("../Models/Documnets.Models");
const ApiError = require("../Utils/ApiError.Utils");

exports.looking_for_documents = async (id) => {
  const find_document = await Document.findOne({
    _id: id,
  });
  if (find_document) {
    return find_document;
  } else {
    throw new ApiError(403, "could not find the document");
  }
};

exports.create_the_document = async (
  appllying_for,
  SSC_Marks_sheet,
  HSC_Marks_Sheeet,
  SSC_Leaving_Certificate,
  HSC_Leaving_Certificate,
  certificate_Por_Physically_challanged,
  elgibility_form,
  semester1_MarlsSheet,
  semester2_MarlsSheet,
  semester3_MarlsSheet,
  semester4_MarlsSheet,
  semester5_MarlsSheet,
  semester6_MarlsSheet,
  semester7_MarlsSheet,
  semester8_MarlsSheet,
  yuva_raksha_form,
  adhaar_card,
  electricity_Bill
) => {
  let create;
  switch (appllying_for) {
    case "SSC":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    case "HSC":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        HSC_Marks_Sheeet: HSC_Marks_Sheeet,
        HSC_Leaving_Certificate: HSC_Leaving_Certificate,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    case "First-year":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        HSC_Marks_Sheeet: HSC_Marks_Sheeet,
        HSC_Leaving_Certificate: HSC_Leaving_Certificate,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    case "Second-year":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        HSC_Marks_Sheeet: HSC_Marks_Sheeet,
        HSC_Leaving_Certificate: HSC_Leaving_Certificate,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        semester1_MarlsSheet: semester1_MarlsSheet,
        semester2_MarlsSheet: semester2_MarlsSheet,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    case "Third-year":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        HSC_Marks_Sheeet: HSC_Marks_Sheeet,
        HSC_Leaving_Certificate: HSC_Leaving_Certificate,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        semester1_MarlsSheet: semester1_MarlsSheet,
        semester2_MarlsSheet: semester2_MarlsSheet,
        semester3_MarlsSheet: semester3_MarlsSheet,
        semester4_MarlsSheet: semester4_MarlsSheet,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    case "Fourth-year":
      create = await Document.create({
        SSC_Marks_sheet: SSC_Marks_sheet,
        HSC_Marks_Sheeet: HSC_Marks_Sheeet,
        HSC_Leaving_Certificate: HSC_Leaving_Certificate,
        adhaar_card: adhaar_card,
        SSC_Leaving_Certificate: SSC_Leaving_Certificate,
        electricity_Bill: electricity_Bill,
        certificate_Por_Physically_challanged:
          certificate_Por_Physically_challanged,
        semester1_MarlsSheet: semester1_MarlsSheet,
        semester2_MarlsSheet: semester2_MarlsSheet,
        semester3_MarlsSheet: semester3_MarlsSheet,
        semester4_MarlsSheet: semester4_MarlsSheet,
        semester5_MarlsSheet: semester5_MarlsSheet,
        semester6_MarlsSheet: semester6_MarlsSheet,
        yuva_raksha_form: yuva_raksha_form,
        elgibility_form: elgibility_form,
      });
      break;
    default:
      throw new ApiError(404, "bad request");
  }
  if (create) {
    return create;
  } else {
    throw new ApiError(403, "could not create the document");
  }
};
