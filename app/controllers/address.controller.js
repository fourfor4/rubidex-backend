const db = require("../models");
const Sequelize = require("sequelize");
const moment = require("moment");
const Washington = db.washington;
const Op = Sequelize.Op;
const addressJson = require("../constants/address.json");
const addressInfo = require("../constants/Address_Points.json");

exports.create = async (req, res) => {
  const newDatas = addressInfo.features.map((item) => {
    return {
      type: item.type,
      pro_site_address_pk: item.properties.SITE_ADDRESS_PK,
      pro_address_id: item.properties.ADDRESS_ID,
      pro_roadwaysegid: item.properties.ROADWAYSEGID,
      pro_status: item.properties.STATUS,
      pro_ssl: item.properties.SSL,
      pro_type_: item.properties.TYPE_,
      pro_entrancetype: item.properties.ENTRANCETYPE,
      pro_addrnum: item.properties.ADDRNUM,
      pro_addrnumsuffix: item.properties.ADDRNUMSUFFIX,

      pro_stname: item.properties.STNAME,

      pro_street_type: item.properties.STREET_TYPE,

      pro_quadrant: item.properties.QUADRANT,

      pro_city: item.properties.CITY,

      pro_state: item.properties.STATE,

      pro_fulladdress: item.properties.FULLADDRESS,

      pro_square: item.properties.SQUARE,

      pro_suffix: item.properties.SUFFIX,

      pro_lot: item.properties.LOT,

      pro_nationalgrid: item.properties.NATIONALGRID,

      pro_zipcode4: item.properties.ZIPCODE4,

      pro_xcord: item.properties.XCOORD,

      pro_ycord: item.properties.YCOORD,

      pro_status_id: item.properties.STATUS_ID,

      pro_metadata_id: item.properties.METADATA_ID,

      pro_assessment_nbhd: item.properties.ASSESSMENT_NBHD,

      pro_assessment_subnbhd: item.properties.ASSESSMENT_SUBNBHD,

      pro_cfsa_name: item.properties.CFSA_NAME,

      pro_hotspot: item.properties.HOTSPOT,

      pro_cluster_: item.properties.CLUSTER_,

      pro_poldist: item.properties.POLDIST,

      pro_roc: item.properties.ROC,

      pro_psa: item.properties.PSA,

      pro_smd: item.properties.SMD,

      pro_census_tract: item.properties.CENSUS_TRACT,

      pro_vote_prcnct: item.properties.VOTE_PRCNCT,

      pro_ward: item.properties.WARD,

      pro_zipcode: item.properties.ZIPCODE,

      pro_anc: item.properties.ANC,

      pro_newcommselect06: item.properties.NEWCOMMSELECT06,

      pro_newcommcandidate: item.properties.NEWCOMMCANDIDATE,

      pro_census_block: item.properties.CENSUS_BLOCK,

      pro_census_blockgroup: item.properties.CENSUS_BLOCKGROUP,

      pro_focus_improvement_area: item.properties.FOCUS_IMPROVEMENT_AREA,

      pro_se_anno_cad_data: item.properties.SE_ANNO_CAD_DATA,

      pro_latitude: item.properties.LATITUDE,

      pro_longitude: item.properties.LONGITUDE,

      pro_active_res_unit_count: item.properties.ACTIVE_RES_UNIT_COUNT,

      pro_res_type: item.properties.RES_TYPE,

      pro_active_res_occupancy_count:
        item.properties.ACTIVE_RES_OCCUPANCY_COUNT,

      pro_ward_2002: item.properties.WARD_2002,

      pro_ward_2012: item.properties.WARD_2012,

      pro_anc_2002: item.properties.ANC_2002,

      pro_anc_2012: item.properties.ANC_2012,

      pro_smd_2002: item.properties.SMD_2002,

      pro_smd_2012: item.properties.SMD_2012,

      pro_objectid_12: item.properties.OBJECTID_12,

      pro_objectid: item.properties.OBJECTID,

      pro_objectid_1: item.properties.OBJECTID_1,

      pro_anc_2023: item.properties.ANC_2023,

      pro_smd_2023: item.properties.SMD_2023,

      geometry_type: item.geometry.type,
      getometry_coordinates_1: item.geometry.coordinates[0],
      getometry_coordinates_2: item.geometry.coordinates[1],
    };
  });

  for (let i = 0; i < newDatas.length; i++) {
    const item = newDatas[i];
    await Washington.create(item);
  }
  res.status(200).send({
    success: true,
    newDatas,
  });

  Washington.bulkCreate(newDatas.slice(0, 100))
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.select = async (req, res) => {
  const { field, value, currentPage, pageLimit } = req.body;
  try {
    const result = await Washington.findAndCountAll({
      where: {
        [field]: {
          [Op.eq]: value,
        },
      },
      order: [["id", "DESC"]],
      limit: pageLimit,
      offset: (currentPage - 1) * pageLimit,
    });

    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
