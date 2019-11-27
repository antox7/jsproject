data2 = {
  "meta" : {
    "view" : {
      "id" : "qb7u-rbmr",
      "name" : "NYC crime",
      "attribution" : "Police Department (NYPD)",
      "averageRating" : 0,
      "category" : "Public Safety",
      "createdAt" : 1494126588,
      "description" : "This dataset includes all valid felony, misdemeanor, and violation crimes reported to the New York City Police Department (NYPD) for all complete quarters so far this year (2017). For additional details, please see the attached data dictionary in the ‘About’ section.",
      "displayType" : "table",
      "downloadCount" : 1054,
      "hideFromCatalog" : true,
      "hideFromDataJson" : true,
      "indexUpdatedAt" : 1570818294,
      "newBackend" : true,
      "numberOfComments" : 0,
      "oid" : 29977922,
      "provenance" : "community",
      "publicationAppendEnabled" : false,
      "publicationDate" : 1501708020,
      "publicationGroup" : 13877134,
      "publicationStage" : "published",
      "rowsUpdatedAt" : 1563563404,
      "rowsUpdatedBy" : "d5dp-fses",
      "tableId" : 15611167,
      "totalTimesRated" : 0,
      "viewCount" : 8407,
      "viewLastModified" : 1494129087,
      "viewType" : "tabular",
      "approvals" : [ {
        "reviewedAt" : 1494126588,
        "reviewedAutomatically" : true,
        "state" : "approved",
        "submissionId" : 1077364,
        "submissionObject" : "public_audience_request",
        "submissionOutcome" : "change_audience",
        "submittedAt" : 1494126588,
        "workflowId" : 2285,
        "reviewer" : {
          "id" : "5fuc-pqz2",
          "displayName" : "NYC OpenData"
        },
        "submissionDetails" : {
          "permissionType" : "READ"
        },
        "submissionOutcomeApplication" : {
          "failureCount" : 0,
          "status" : "success"
        },
        "submitter" : {
          "id" : "4k5s-5496",
          "displayName" : "SHERWIN LAU"
        }
      } ],
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : ":sid",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : ":id",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : ":position",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : 380222634,
        "name" : "CMPLNT_NUM",
        "dataTypeName" : "number",
        "description" : "Randomly generated persistent ID for each complaint ",
        "fieldName" : "cmplnt_num",
        "position" : 1,
        "renderTypeName" : "number",
        "tableColumnId" : 39763946,
        "width" : 178,
        "cachedContents" : {
          "largest" : "983297347",
          "non_null" : 43,
          "average" : "496264714.7906977",
          "null" : 0,
          "top" : [ {
            "item" : "437013982",
            "count" : 20
          }, {
            "item" : "403250906",
            "count" : 19
          } ],
          "smallest" : "110241037",
          "sum" : "21339382736"
        },
        "format" : {
          "precisionStyle" : "standard",
          "noCommas" : "true",
          "align" : "right"
        }
      }, {
        "id" : 380222635,
        "name" : "ADDR_PCT_CD",
        "dataTypeName" : "number",
        "description" : "The precinct in which the incident occurred",
        "fieldName" : "addr_pct_cd",
        "position" : 2,
        "renderTypeName" : "number",
        "tableColumnId" : 39763960,
        "width" : 232,
        "cachedContents" : {
          "largest" : "34.0",
          "non_null" : 43,
          "average" : "20.09302325581395",
          "null" : 0,
          "top" : [ {
            "item" : "18.0",
            "count" : 20
          }, {
            "item" : "34.0",
            "count" : 19
          }, {
            "item" : "32.0",
            "count" : 18
          }, {
            "item" : "25.0",
            "count" : 17
          }, {
            "item" : "9.0",
            "count" : 16
          }, {
            "item" : "30.0",
            "count" : 15
          }, {
            "item" : "1.0",
            "count" : 14
          }, {
            "item" : "5.0",
            "count" : 13
          }, {
            "item" : "23.0",
            "count" : 12
          }, {
            "item" : "10.0",
            "count" : 11
          }, {
            "item" : "33.0",
            "count" : 10
          }, {
            "item" : "6.0",
            "count" : 9
          }, {
            "item" : "28.0",
            "count" : 8
          }, {
            "item" : "19.0",
            "count" : 7
          }, {
            "item" : "7.0",
            "count" : 6
          }, {
            "item" : "26.0",
            "count" : 5
          } ],
          "smallest" : "1.0",
          "sum" : "864.0"
        },
        "format" : { }
      }, {
        "id" : 380222636,
        "name" : "BORO_NM",
        "dataTypeName" : "text",
        "description" : "The name of the borough in which the incident occurred",
        "fieldName" : "boro_nm",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 39763959,
        "width" : 184,
        "cachedContents" : {
          "largest" : "MANHATTAN",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "MANHATTAN",
            "count" : 20
          } ],
          "smallest" : "MANHATTAN"
        },
        "format" : { }
      }, {
        "id" : 380222637,
        "name" : "CMPLNT_FR_DT",
        "dataTypeName" : "calendar_date",
        "description" : "Exact date of occurrence for the reported event (or starting date of occurrence, if CMPLNT_TO_DT exists)",
        "fieldName" : "cmplnt_fr_dt",
        "position" : 4,
        "renderTypeName" : "calendar_date",
        "tableColumnId" : 39763947,
        "width" : 178,
        "cachedContents" : {
          "largest" : "2016-12-26T00:00:00",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "2016-06-16T00:00:00",
            "count" : 20
          }, {
            "item" : "2016-04-25T00:00:00",
            "count" : 19
          }, {
            "item" : "2016-12-26T00:00:00",
            "count" : 18
          }, {
            "item" : "2016-01-02T00:00:00",
            "count" : 17
          }, {
            "item" : "2016-04-13T00:00:00",
            "count" : 16
          }, {
            "item" : "2016-11-19T00:00:00",
            "count" : 15
          }, {
            "item" : "2016-08-15T00:00:00",
            "count" : 14
          }, {
            "item" : "2016-09-16T00:00:00",
            "count" : 13
          }, {
            "item" : "2016-01-01T00:00:00",
            "count" : 12
          }, {
            "item" : "2016-05-26T00:00:00",
            "count" : 11
          }, {
            "item" : "2016-08-13T00:00:00",
            "count" : 10
          }, {
            "item" : "2016-12-16T00:00:00",
            "count" : 9
          }, {
            "item" : "2016-09-01T00:00:00",
            "count" : 8
          }, {
            "item" : "2016-02-01T00:00:00",
            "count" : 7
          }, {
            "item" : "2016-08-18T00:00:00",
            "count" : 6
          }, {
            "item" : "2016-05-27T00:00:00",
            "count" : 5
          }, {
            "item" : "2016-10-09T00:00:00",
            "count" : 4
          }, {
            "item" : "2016-03-24T00:00:00",
            "count" : 3
          }, {
            "item" : "2016-03-23T00:00:00",
            "count" : 2
          }, {
            "item" : "2016-04-23T00:00:00",
            "count" : 1
          } ],
          "smallest" : "2016-01-01T00:00:00"
        },
        "format" : {
          "view" : "date",
          "align" : "left"
        }
      }, {
        "id" : 380222638,
        "name" : "CMPLNT_FR_TM",
        "dataTypeName" : "text",
        "description" : "Exact time of occurrence for the reported event (or starting time of occurrence, if CMPLNT_TO_TM exists)",
        "fieldName" : "cmplnt_fr_tm",
        "position" : 5,
        "renderTypeName" : "text",
        "tableColumnId" : 39763948,
        "width" : 200,
        "cachedContents" : {
          "largest" : "23:59:00",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "18:00:00",
            "count" : 20
          }, {
            "item" : "23:59:00",
            "count" : 19
          }, {
            "item" : "09:00:00",
            "count" : 18
          }, {
            "item" : "22:00:00",
            "count" : 17
          }, {
            "item" : "00:00:00",
            "count" : 16
          }, {
            "item" : "12:00:00",
            "count" : 15
          }, {
            "item" : "17:03:00",
            "count" : 14
          }, {
            "item" : "17:00:00",
            "count" : 13
          }, {
            "item" : "23:00:00",
            "count" : 12
          }, {
            "item" : "08:00:00",
            "count" : 11
          }, {
            "item" : "13:00:00",
            "count" : 10
          }, {
            "item" : "00:01:00",
            "count" : 9
          }, {
            "item" : "21:50:00",
            "count" : 8
          }, {
            "item" : "20:00:00",
            "count" : 7
          }, {
            "item" : "14:50:00",
            "count" : 6
          }, {
            "item" : "04:00:00",
            "count" : 5
          }, {
            "item" : "13:40:00",
            "count" : 4
          }, {
            "item" : "19:00:00",
            "count" : 3
          }, {
            "item" : "20:11:00",
            "count" : 2
          }, {
            "item" : "15:00:00",
            "count" : 1
          } ],
          "smallest" : "00:00:00"
        },
        "format" : { }
      }, {
        "id" : 380222639,
        "name" : "CMPLNT_TO_DT",
        "dataTypeName" : "calendar_date",
        "description" : "Ending date of occurrence for the reported event, if exact time of occurrence is unknown",
        "fieldName" : "cmplnt_to_dt",
        "position" : 6,
        "renderTypeName" : "calendar_date",
        "tableColumnId" : 39763949,
        "width" : 209,
        "cachedContents" : {
          "largest" : "2019-06-16T00:00:00",
          "non_null" : 34,
          "null" : 9,
          "top" : [ {
            "item" : "2019-06-16T00:00:00",
            "count" : 20
          }, {
            "item" : "2019-04-25T00:00:00",
            "count" : 19
          }, {
            "item" : "2016-12-27T00:00:00",
            "count" : 18
          }, {
            "item" : "2017-01-02T00:00:00",
            "count" : 17
          }, {
            "item" : "2018-08-28T00:00:00",
            "count" : 16
          }, {
            "item" : "2016-09-16T00:00:00",
            "count" : 15
          }, {
            "item" : "2019-04-05T00:00:00",
            "count" : 14
          }, {
            "item" : "2019-02-27T00:00:00",
            "count" : 13
          }, {
            "item" : "2017-12-31T00:00:00",
            "count" : 12
          }, {
            "item" : "2018-09-01T00:00:00",
            "count" : 11
          }, {
            "item" : "2016-10-12T00:00:00",
            "count" : 10
          }, {
            "item" : "2017-02-14T00:00:00",
            "count" : 9
          }, {
            "item" : "2016-10-10T00:00:00",
            "count" : 8
          }, {
            "item" : "2016-03-25T00:00:00",
            "count" : 7
          }, {
            "item" : "2019-03-20T00:00:00",
            "count" : 6
          }, {
            "item" : "2017-03-23T00:00:00",
            "count" : 5
          }, {
            "item" : "2016-04-28T00:00:00",
            "count" : 4
          }, {
            "item" : "2019-03-12T00:00:00",
            "count" : 3
          }, {
            "item" : "2017-07-01T00:00:00",
            "count" : 2
          }, {
            "item" : "2016-03-01T00:00:00",
            "count" : 1
          } ],
          "smallest" : "2016-03-01T00:00:00"
        },
        "format" : {
          "view" : "date",
          "align" : "left"
        }
      }, {
        "id" : 380222640,
        "name" : "CMPLNT_TO_TM",
        "dataTypeName" : "text",
        "description" : "Ending time of occurrence for the reported event, if exact time of occurrence is unknown",
        "fieldName" : "cmplnt_to_tm",
        "position" : 7,
        "renderTypeName" : "text",
        "tableColumnId" : 39763950,
        "width" : 244,
        "cachedContents" : {
          "largest" : "23:59:00",
          "non_null" : 34,
          "null" : 9,
          "top" : [ {
            "item" : "18:30:00",
            "count" : 20
          }, {
            "item" : "19:00:00",
            "count" : 19
          }, {
            "item" : "00:59:00",
            "count" : 18
          }, {
            "item" : "00:00:00",
            "count" : 17
          }, {
            "item" : "17:05:00",
            "count" : 16
          }, {
            "item" : "04:36:00",
            "count" : 15
          }, {
            "item" : "23:00:00",
            "count" : 14
          }, {
            "item" : "08:00:00",
            "count" : 13
          }, {
            "item" : "13:00:00",
            "count" : 12
          }, {
            "item" : "23:59:00",
            "count" : 11
          }, {
            "item" : "12:00:00",
            "count" : 10
          }, {
            "item" : "06:54:00",
            "count" : 9
          }, {
            "item" : "14:51:00",
            "count" : 8
          }, {
            "item" : "00:01:00",
            "count" : 7
          }, {
            "item" : "04:00:00",
            "count" : 6
          }, {
            "item" : "13:46:00",
            "count" : 5
          }, {
            "item" : "22:00:00",
            "count" : 4
          }, {
            "item" : "09:00:00",
            "count" : 3
          }, {
            "item" : "23:35:00",
            "count" : 2
          }, {
            "item" : "20:29:00",
            "count" : 1
          } ],
          "smallest" : "00:00:00"
        },
        "format" : { }
      }, {
        "id" : 380222641,
        "name" : "CRM_ATPT_CPTD_CD",
        "dataTypeName" : "text",
        "description" : "Indicator of whether crime was successfully completed or attempted, but failed or was interrupted prematurely",
        "fieldName" : "crm_atpt_cptd_cd",
        "position" : 8,
        "renderTypeName" : "text",
        "tableColumnId" : 39763956,
        "width" : 292,
        "cachedContents" : {
          "largest" : "COMPLETED",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "ATTEMPTED",
            "count" : 20
          }, {
            "item" : "COMPLETED",
            "count" : 19
          } ],
          "smallest" : "ATTEMPTED"
        },
        "format" : { }
      }, {
        "id" : 380222642,
        "name" : "HADEVELOPT",
        "dataTypeName" : "text",
        "description" : "Name of NYCHA housing development of occurrence, if applicable",
        "fieldName" : "hadevelopt",
        "position" : 9,
        "renderTypeName" : "text",
        "tableColumnId" : 39763964,
        "width" : 220,
        "cachedContents" : {
          "largest" : "WAGNER",
          "non_null" : 2,
          "null" : 41,
          "top" : [ {
            "item" : "WAGNER",
            "count" : 20
          }, {
            "item" : "GRANT",
            "count" : 19
          } ],
          "smallest" : "GRANT"
        },
        "format" : { }
      }, {
        "id" : 380222645,
        "name" : "JURIS_DESC",
        "dataTypeName" : "text",
        "description" : "Description of the jurisdiction code",
        "fieldName" : "juris_desc",
        "position" : 12,
        "renderTypeName" : "text",
        "tableColumnId" : 39763958,
        "width" : 220,
        "cachedContents" : {
          "largest" : "N.Y. POLICE DEPT",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "N.Y. POLICE DEPT",
            "count" : 20
          }, {
            "item" : "N.Y. HOUSING POLICE",
            "count" : 19
          } ],
          "smallest" : "N.Y. HOUSING POLICE"
        },
        "format" : { }
      }, {
        "id" : 380222646,
        "name" : "KY_CD",
        "dataTypeName" : "number",
        "description" : "Three digit offense classification code",
        "fieldName" : "ky_cd",
        "position" : 13,
        "renderTypeName" : "number",
        "tableColumnId" : 39763952,
        "width" : 160,
        "cachedContents" : {
          "largest" : "578",
          "non_null" : 43,
          "average" : "215.9767441860465",
          "null" : 0,
          "top" : [ {
            "item" : "105",
            "count" : 20
          }, {
            "item" : "578",
            "count" : 19
          }, {
            "item" : "104",
            "count" : 18
          }, {
            "item" : "341",
            "count" : 17
          }, {
            "item" : "106",
            "count" : 16
          }, {
            "item" : "112",
            "count" : 15
          }, {
            "item" : "109",
            "count" : 14
          }, {
            "item" : "361",
            "count" : 13
          }, {
            "item" : "116",
            "count" : 12
          }, {
            "item" : "125",
            "count" : 11
          }, {
            "item" : "113",
            "count" : 10
          }, {
            "item" : "233",
            "count" : 9
          }, {
            "item" : "126",
            "count" : 8
          }, {
            "item" : "344",
            "count" : 7
          }, {
            "item" : "340",
            "count" : 6
          } ],
          "smallest" : "104",
          "sum" : "9287"
        },
        "format" : { }
      }, {
        "id" : 380222647,
        "name" : "LAW_CAT_CD",
        "dataTypeName" : "text",
        "description" : "Level of offense: felony, misdemeanor, violation ",
        "fieldName" : "law_cat_cd",
        "position" : 14,
        "renderTypeName" : "text",
        "tableColumnId" : 39763957,
        "width" : 220,
        "cachedContents" : {
          "largest" : "VIOLATION",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "FELONY",
            "count" : 20
          }, {
            "item" : "VIOLATION",
            "count" : 19
          }, {
            "item" : "MISDEMEANOR",
            "count" : 18
          } ],
          "smallest" : "FELONY"
        },
        "format" : { }
      }, {
        "id" : 380222648,
        "name" : "LOC_OF_OCCUR_DESC",
        "dataTypeName" : "text",
        "description" : "Specific location of occurrence in or around the premises; inside, opposite of, front of, rear of",
        "fieldName" : "loc_of_occur_desc",
        "position" : 15,
        "renderTypeName" : "text",
        "tableColumnId" : 39763961,
        "width" : 304,
        "cachedContents" : {
          "largest" : "INSIDE",
          "non_null" : 35,
          "null" : 8,
          "top" : [ {
            "item" : "INSIDE",
            "count" : 20
          }, {
            "item" : "FRONT OF",
            "count" : 19
          } ],
          "smallest" : "FRONT OF"
        },
        "format" : { }
      }, {
        "id" : 380222649,
        "name" : "OFNS_DESC",
        "dataTypeName" : "text",
        "description" : "Description of offense corresponding with key code",
        "fieldName" : "ofns_desc",
        "position" : 16,
        "renderTypeName" : "text",
        "tableColumnId" : 39763953,
        "width" : 208,
        "cachedContents" : {
          "largest" : "THEFT-FRAUD",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "ROBBERY",
            "count" : 20
          }, {
            "item" : "HARRASSMENT 2",
            "count" : 19
          }, {
            "item" : "RAPE",
            "count" : 18
          }, {
            "item" : "PETIT LARCENY",
            "count" : 17
          }, {
            "item" : "FELONY ASSAULT",
            "count" : 16
          }, {
            "item" : "THEFT-FRAUD",
            "count" : 15
          }, {
            "item" : "GRAND LARCENY",
            "count" : 14
          }, {
            "item" : "OFF. AGNST PUB ORD SENSBLTY &",
            "count" : 13
          }, {
            "item" : "SEX CRIMES",
            "count" : 12
          }, {
            "item" : "NYS LAWS-UNCLASSIFIED FELONY",
            "count" : 11
          }, {
            "item" : "FORGERY",
            "count" : 10
          }, {
            "item" : "MISCELLANEOUS PENAL LAW",
            "count" : 9
          }, {
            "item" : "ASSAULT 3 & RELATED OFFENSES",
            "count" : 8
          }, {
            "item" : "FRAUDS",
            "count" : 7
          } ],
          "smallest" : "ASSAULT 3 & RELATED OFFENSES"
        },
        "format" : { }
      }, {
        "id" : 380222650,
        "name" : "PARKS_NM",
        "dataTypeName" : "text",
        "description" : "Name of NYC park, playground or greenspace of occurrence, if applicable (state parks are not included)",
        "fieldName" : "parks_nm",
        "position" : 17,
        "renderTypeName" : "text",
        "tableColumnId" : 39763963,
        "width" : 196,
        "cachedContents" : {
          "non_null" : 0,
          "null" : 43
        },
        "format" : { }
      }, {
        "id" : 380222652,
        "name" : "PD_CD",
        "dataTypeName" : "number",
        "description" : "Three digit internal classification code (more granular than Key Code)",
        "fieldName" : "pd_cd",
        "position" : 19,
        "renderTypeName" : "number",
        "tableColumnId" : 39763954,
        "width" : 160,
        "cachedContents" : {
          "largest" : "847.0",
          "non_null" : 43,
          "average" : "420.8604651162791",
          "null" : 0,
          "top" : [ {
            "item" : "386.0",
            "count" : 20
          }, {
            "item" : "637.0",
            "count" : 19
          }, {
            "item" : "157.0",
            "count" : 18
          }, {
            "item" : "338.0",
            "count" : 17
          }, {
            "item" : "109.0",
            "count" : 16
          }, {
            "item" : "739.0",
            "count" : 15
          }, {
            "item" : "349.0",
            "count" : 14
          }, {
            "item" : "405.0",
            "count" : 13
          }, {
            "item" : "639.0",
            "count" : 12
          }, {
            "item" : "426.0",
            "count" : 11
          }, {
            "item" : "177.0",
            "count" : 10
          }, {
            "item" : "847.0",
            "count" : 9
          }, {
            "item" : "638.0",
            "count" : 8
          }, {
            "item" : "166.0",
            "count" : 7
          }, {
            "item" : "407.0",
            "count" : 6
          }, {
            "item" : "729.0",
            "count" : 5
          }, {
            "item" : "321.0",
            "count" : 4
          }, {
            "item" : "175.0",
            "count" : 3
          }, {
            "item" : "708.0",
            "count" : 2
          }, {
            "item" : "170.0",
            "count" : 1
          } ],
          "smallest" : "101.0",
          "sum" : "18097.0"
        },
        "format" : { }
      }, {
        "id" : 380222653,
        "name" : "PD_DESC",
        "dataTypeName" : "text",
        "description" : "Description of internal classification corresponding with PD code (more granular than Offense Description)",
        "fieldName" : "pd_desc",
        "position" : 20,
        "renderTypeName" : "text",
        "tableColumnId" : 39763955,
        "width" : 184,
        "cachedContents" : {
          "largest" : "SODOMY 2",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "ROBBERY,PERSONAL ELECTRONIC DEVICE",
            "count" : 20
          }, {
            "item" : "HARASSMENT,SUBD 1,CIVILIAN",
            "count" : 19
          }, {
            "item" : "RAPE 1",
            "count" : 18
          }, {
            "item" : "LARCENY,PETIT FROM BUILDING,UN",
            "count" : 17
          }, {
            "item" : "ASSAULT 2,1,UNCLASSIFIED",
            "count" : 16
          }, {
            "item" : "FRAUD,UNCLASSIFIED-FELONY",
            "count" : 15
          }, {
            "item" : "LARCENY,PETIT OF LICENSE PLATE",
            "count" : 14
          }, {
            "item" : "LARCENY,GRAND BY THEFT OF CREDIT CARD",
            "count" : 13
          }, {
            "item" : "AGGRAVATED HARASSMENT 2",
            "count" : 12
          }, {
            "item" : "LARCENY,GRAND BY BANK ACCT COMPROMISE-TELLER",
            "count" : 11
          }, {
            "item" : "SEXUAL ABUSE",
            "count" : 10
          }, {
            "item" : "NY STATE LAWS,UNCLASSIFIED FEL",
            "count" : 9
          }, {
            "item" : "HARASSMENT,SUBD 3,4,5",
            "count" : 8
          }, {
            "item" : "SODOMY 2",
            "count" : 7
          }, {
            "item" : "LARCENY,GRAND BY DISHONEST EMP",
            "count" : 6
          }, {
            "item" : "FORGERY,ETC.,UNCLASSIFIED-FELO",
            "count" : 5
          }, {
            "item" : "LARCENY,PETIT FROM AUTO",
            "count" : 4
          }, {
            "item" : "SEXUAL ABUSE 3,2",
            "count" : 3
          }, {
            "item" : "IMPERSONATION 1, POLICE OFFICE",
            "count" : 2
          }, {
            "item" : "SEXUAL MISCONDUCT,INTERCOURSE",
            "count" : 1
          } ],
          "smallest" : "AGGRAVATED HARASSMENT 2"
        },
        "format" : { }
      }, {
        "id" : 380222654,
        "name" : "PREM_TYP_DESC",
        "dataTypeName" : "text",
        "description" : "Specific description of premises; grocery store, residence, street, etc.",
        "fieldName" : "prem_typ_desc",
        "position" : 21,
        "renderTypeName" : "text",
        "tableColumnId" : 39763962,
        "width" : 256,
        "cachedContents" : {
          "largest" : "STREET",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "STREET",
            "count" : 20
          }, {
            "item" : "HOMELESS SHELTER",
            "count" : 19
          }, {
            "item" : "RESIDENCE - APT. HOUSE",
            "count" : 18
          }, {
            "item" : "COMMERCIAL BUILDING",
            "count" : 17
          }, {
            "item" : "BANK",
            "count" : 16
          }, {
            "item" : "RESIDENCE - PUBLIC HOUSING",
            "count" : 15
          }, {
            "item" : "PUBLIC BUILDING",
            "count" : 14
          }, {
            "item" : "GROCERY/BODEGA",
            "count" : 13
          }, {
            "item" : "PHOTO/COPY",
            "count" : 12
          }, {
            "item" : "BAR/NIGHT CLUB",
            "count" : 11
          }, {
            "item" : "OTHER",
            "count" : 10
          }, {
            "item" : "RESIDENCE-HOUSE",
            "count" : 9
          }, {
            "item" : "PUBLIC SCHOOL",
            "count" : 8
          } ],
          "smallest" : "BANK"
        },
        "format" : { }
      }, {
        "id" : 380222655,
        "name" : "RPT_DT",
        "dataTypeName" : "calendar_date",
        "description" : "Date event was reported to police ",
        "fieldName" : "rpt_dt",
        "position" : 22,
        "renderTypeName" : "calendar_date",
        "tableColumnId" : 39763951,
        "width" : 172,
        "cachedContents" : {
          "largest" : "2019-06-17T00:00:00",
          "non_null" : 43,
          "null" : 0,
          "top" : [ {
            "item" : "2019-06-17T00:00:00",
            "count" : 20
          }, {
            "item" : "2019-06-11T00:00:00",
            "count" : 19
          }, {
            "item" : "2019-06-04T00:00:00",
            "count" : 18
          }, {
            "item" : "2019-05-29T00:00:00",
            "count" : 17
          }, {
            "item" : "2019-05-24T00:00:00",
            "count" : 16
          }, {
            "item" : "2019-05-17T00:00:00",
            "count" : 15
          }, {
            "item" : "2019-05-16T00:00:00",
            "count" : 14
          }, {
            "item" : "2019-05-15T00:00:00",
            "count" : 13
          }, {
            "item" : "2019-05-09T00:00:00",
            "count" : 12
          }, {
            "item" : "2019-05-01T00:00:00",
            "count" : 11
          }, {
            "item" : "2019-04-28T00:00:00",
            "count" : 10
          }, {
            "item" : "2019-04-10T00:00:00",
            "count" : 9
          }, {
            "item" : "2019-04-08T00:00:00",
            "count" : 8
          }, {
            "item" : "2019-04-06T00:00:00",
            "count" : 7
          }, {
            "item" : "2019-04-03T00:00:00",
            "count" : 6
          }, {
            "item" : "2019-04-02T00:00:00",
            "count" : 5
          }, {
            "item" : "2019-03-28T00:00:00",
            "count" : 4
          }, {
            "item" : "2019-03-26T00:00:00",
            "count" : 3
          }, {
            "item" : "2019-03-23T00:00:00",
            "count" : 2
          }, {
            "item" : "2019-03-22T00:00:00",
            "count" : 1
          } ],
          "smallest" : "2019-01-02T00:00:00"
        },
        "format" : {
          "view" : "date",
          "align" : "left"
        }
      }, {
        "id" : 380222664,
        "name" : "X_COORD_CD",
        "dataTypeName" : "number",
        "description" : "X-coordinate for New York State Plane Coordinate System, Long Island Zone, NAD 83, units feet (FIPS 3104)",
        "fieldName" : "x_coord_cd",
        "position" : 31,
        "renderTypeName" : "number",
        "tableColumnId" : 39763965,
        "width" : 220,
        "cachedContents" : {
          "largest" : "1005771.0",
          "non_null" : 43,
          "average" : "993900.5813953488",
          "null" : 0,
          "top" : [ {
            "item" : "991518.0",
            "count" : 20
          }, {
            "item" : "1005771.0",
            "count" : 19
          }, {
            "item" : "999358.0",
            "count" : 18
          }, {
            "item" : "999525.0",
            "count" : 17
          }, {
            "item" : "991134.0",
            "count" : 16
          }, {
            "item" : "998758.0",
            "count" : 15
          }, {
            "item" : "981926.0",
            "count" : 14
          }, {
            "item" : "991677.0",
            "count" : 13
          }, {
            "item" : "988408.0",
            "count" : 12
          }, {
            "item" : "982932.0",
            "count" : 11
          }, {
            "item" : "990600.0",
            "count" : 10
          }, {
            "item" : "998730.0",
            "count" : 9
          }, {
            "item" : "983903.0",
            "count" : 8
          }, {
            "item" : "988696.0",
            "count" : 7
          }, {
            "item" : "1000555.0",
            "count" : 6
          }, {
            "item" : "991242.0",
            "count" : 5
          }, {
            "item" : "1004619.0",
            "count" : 4
          }, {
            "item" : "984928.0",
            "count" : 3
          }, {
            "item" : "999162.0",
            "count" : 2
          }, {
            "item" : "982246.0",
            "count" : 1
          } ],
          "smallest" : "981926.0",
          "sum" : "42737725.0"
        },
        "format" : { }
      }, {
        "id" : 380222665,
        "name" : "Y_COORD_CD",
        "dataTypeName" : "number",
        "description" : "Y-coordinate for New York State Plane Coordinate System, Long Island Zone, NAD 83, units feet (FIPS 3104)",
        "fieldName" : "y_coord_cd",
        "position" : 32,
        "renderTypeName" : "number",
        "tableColumnId" : 39763966,
        "width" : 220,
        "cachedContents" : {
          "largest" : "254992.0",
          "non_null" : 43,
          "average" : "223566.2790697674",
          "null" : 0,
          "top" : [ {
            "item" : "216299.0",
            "count" : 20
          }, {
            "item" : "253980.0",
            "count" : 19
          }, {
            "item" : "236472.0",
            "count" : 18
          }, {
            "item" : "231804.0",
            "count" : 17
          }, {
            "item" : "203370.0",
            "count" : 16
          }, {
            "item" : "240846.0",
            "count" : 15
          }, {
            "item" : "196411.0",
            "count" : 14
          }, {
            "item" : "215466.0",
            "count" : 13
          }, {
            "item" : "219412.0",
            "count" : 12
          }, {
            "item" : "200142.0",
            "count" : 11
          }, {
            "item" : "203948.0",
            "count" : 10
          }, {
            "item" : "226827.0",
            "count" : 9
          }, {
            "item" : "200257.0",
            "count" : 8
          }, {
            "item" : "216220.0",
            "count" : 7
          }, {
            "item" : "230994.0",
            "count" : 6
          }, {
            "item" : "214811.0",
            "count" : 5
          }, {
            "item" : "254992.0",
            "count" : 4
          }, {
            "item" : "211276.0",
            "count" : 3
          }, {
            "item" : "243927.0",
            "count" : 2
          }, {
            "item" : "210981.0",
            "count" : 1
          } ],
          "smallest" : "196411.0",
          "sum" : "9613350.0"
        },
        "format" : { }
      }, {
        "id" : 380222666,
        "name" : "Latitude",
        "dataTypeName" : "number",
        "description" : "Midblock Latitude coordinate for Global Coordinate System, WGS 1984, decimal degrees (EPSG 4326) ",
        "fieldName" : "latitude",
        "position" : 33,
        "renderTypeName" : "number",
        "tableColumnId" : 39763967,
        "width" : 196,
        "cachedContents" : {
          "largest" : "40.86655347800007",
          "non_null" : 43,
          "average" : "40.78031376072098",
          "null" : 0,
          "top" : [ {
            "item" : "40.76037249500007",
            "count" : 20
          }, {
            "item" : "40.86377311300004",
            "count" : 19
          }, {
            "item" : "40.81573205300003",
            "count" : 18
          }, {
            "item" : "40.802919400000064",
            "count" : 17
          }, {
            "item" : "40.72488591800004",
            "count" : 16
          }, {
            "item" : "40.827738453000045",
            "count" : 15
          }, {
            "item" : "40.70578749500004",
            "count" : 14
          }, {
            "item" : "40.75808599000004",
            "count" : 13
          }, {
            "item" : "40.76891888700004",
            "count" : 12
          }, {
            "item" : "40.71602841300006",
            "count" : 11
          }, {
            "item" : "40.726472786000045",
            "count" : 10
          }, {
            "item" : "40.78926022400003",
            "count" : 9
          }, {
            "item" : "40.71634415200003",
            "count" : 8
          }, {
            "item" : "40.760157529000026",
            "count" : 7
          }, {
            "item" : "40.800694331000045",
            "count" : 6
          }, {
            "item" : "40.756288537000046",
            "count" : 5
          }, {
            "item" : "40.86655347800007",
            "count" : 4
          }, {
            "item" : "40.74658859200008",
            "count" : 3
          }, {
            "item" : "40.83619424000005",
            "count" : 2
          }, {
            "item" : "40.745778689000076",
            "count" : 1
          } ],
          "smallest" : "40.70578749500004",
          "sum" : "1753.553491711002136"
        },
        "format" : { }
      }, {
        "id" : 380222667,
        "name" : "Longitude",
        "dataTypeName" : "number",
        "description" : "Midblock Longitude coordinate for Global Coordinate System, WGS 1984, decimal degrees (EPSG 4326)",
        "fieldName" : "longitude",
        "position" : 34,
        "renderTypeName" : "number",
        "tableColumnId" : 39763968,
        "width" : 208,
        "cachedContents" : {
          "largest" : "-73.92219584099996",
          "non_null" : 43,
          "average" : "-73.96513725527903",
          "null" : 0,
          "top" : [ {
            "item" : "-73.97376599299997",
            "count" : 20
          }, {
            "item" : "-73.92219584099996",
            "count" : 19
          }, {
            "item" : "-73.94542041099999",
            "count" : 18
          }, {
            "item" : "-73.94482770699994",
            "count" : 17
          }, {
            "item" : "-73.97516535599993",
            "count" : 16
          }, {
            "item" : "-73.947578589",
            "count" : 15
          }, {
            "item" : "-74.00838356999998",
            "count" : 14
          }, {
            "item" : "-73.973192967",
            "count" : 13
          }, {
            "item" : "-73.98499030199997",
            "count" : 12
          }, {
            "item" : "-74.00475589499997",
            "count" : 11
          }, {
            "item" : "-73.97709137499999",
            "count" : 10
          }, {
            "item" : "-73.94771000099996",
            "count" : 9
          }, {
            "item" : "-74.00125319299997",
            "count" : 8
          }, {
            "item" : "-73.98395267899997",
            "count" : 7
          }, {
            "item" : "-73.94110928599997",
            "count" : 6
          }, {
            "item" : "-73.97476382199994",
            "count" : 5
          }, {
            "item" : "-73.92635762799993",
            "count" : 4
          }, {
            "item" : "-73.99755456399998",
            "count" : 3
          }, {
            "item" : "-73.94611193699996",
            "count" : 2
          }, {
            "item" : "-74.00723374599994",
            "count" : 1
          } ],
          "smallest" : "-74.00838356999998",
          "sum" : "-3180.50090197699842"
        },
        "format" : { }
      }, {
        "id" : 380222668,
        "name" : "Lat_Lon",
        "dataTypeName" : "location",
        "fieldName" : "lat_lon",
        "position" : 35,
        "renderTypeName" : "location",
        "tableColumnId" : 39763969,
        "width" : 220,
        "format" : {
          "view" : "address_coords",
          "align" : "left"
        },
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      }, {
        "id" : 422793861,
        "name" : "Zip Codes",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_efsh_h5xi",
        "position" : 40,
        "renderTypeName" : "number",
        "tableColumnId" : 65777302,
        "computationStrategy" : {
          "source_columns" : [ "lat_lon" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_efsh-h5xi",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 422793797,
        "name" : "Community Districts",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_f5dn_yrer",
        "position" : 41,
        "renderTypeName" : "number",
        "tableColumnId" : 65777303,
        "computationStrategy" : {
          "source_columns" : [ "lat_lon" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_f5dn-yrer",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 422793733,
        "name" : "Borough Boundaries",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_yeji_bk3q",
        "position" : 42,
        "renderTypeName" : "number",
        "tableColumnId" : 65777304,
        "computationStrategy" : {
          "source_columns" : [ "lat_lon" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_yeji-bk3q",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 422793669,
        "name" : "City Council Districts",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_92fq_4b7q",
        "position" : 43,
        "renderTypeName" : "number",
        "tableColumnId" : 65777305,
        "computationStrategy" : {
          "source_columns" : [ "lat_lon" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_92fq-4b7q",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 422793605,
        "name" : "Police Precincts",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_sbqj_enih",
        "position" : 44,
        "renderTypeName" : "number",
        "tableColumnId" : 65777306,
        "computationStrategy" : {
          "source_columns" : [ "lat_lon" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_sbqj-enih",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      } ],
      "grants" : [ {
        "inherited" : true,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "metadata" : {
        "rdfSubject" : "0",
        "attachments" : [ {
          "filename" : "NYPDIncidentLevelDataFootnotes.pdf",
          "assetId" : "fc4f191a-6adf-4268-a1ae-8525a8d7027b",
          "blobId" : "",
          "name" : "NYPDIncidentLevelDataFootnotes.pdf"
        }, {
          "filename" : "NYPD_Incident_Level_Data_Column_Descriptions.csv",
          "assetId" : "5622c761-4377-4060-a628-ee39ad5c5497",
          "blobId" : "",
          "name" : "NYPD_Incident_Level_Data_Column_Descriptions.csv"
        } ],
        "custom_fields" : {
          "Update" : {
            "Automation" : "No",
            "Date Made Public" : "TBD",
            "Update Frequency" : "Quarterly"
          },
          "Dataset Information" : {
            "Agency" : "Police Department (NYPD)"
          }
        },
        "rowLabel" : "Row",
        "availableDisplayTypes" : [ "table", "fatrow", "page" ],
        "renderTypeConfig" : {
          "visible" : {
            "table" : true
          }
        }
      },
      "owner" : {
        "id" : "4k5s-5496",
        "displayName" : "SHERWIN LAU",
        "screenName" : "SHERWIN LAU",
        "type" : "interactive"
      },
      "query" : {
        "filterCondition" : {
          "type" : "operator",
          "value" : "AND",
          "children" : [ {
            "type" : "operator",
            "value" : "OR",
            "children" : [ {
              "type" : "operator",
              "value" : "BETWEEN",
              "children" : [ {
                "columnId" : 380222637,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "2016-01-01T00:00:00"
              }, {
                "type" : "literal",
                "value" : "2016-12-31T00:00:00"
              } ],
              "metadata" : {
                "freeform" : true
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "13877134" : 39763947
              },
              "operator" : "BETWEEN"
            }
          }, {
            "type" : "operator",
            "value" : "OR",
            "children" : [ {
              "type" : "operator",
              "value" : "EQUALS",
              "children" : [ {
                "columnId" : 380222636,
                "type" : "column"
              }, {
                "type" : "literal",
                "value" : "Manhattan"
              } ],
              "metadata" : {
                "freeform" : true
              }
            } ],
            "metadata" : {
              "tableColumnId" : {
                "13877134" : 39763959
              },
              "operator" : "EQUALS"
            }
          } ],
          "metadata" : {
            "unifiedVersion" : 2
          }
        }
      },
      "rights" : [ "read" ],
      "tableAuthor" : {
        "id" : "5fuc-pqz2",
        "displayName" : "NYC OpenData",
        "profileImageUrlLarge" : "/api/users/5fuc-pqz2/profile_images/LARGE",
        "profileImageUrlMedium" : "/api/users/5fuc-pqz2/profile_images/THUMB",
        "profileImageUrlSmall" : "/api/users/5fuc-pqz2/profile_images/TINY",
        "screenName" : "NYC OpenData",
        "type" : "interactive",
        "flags" : [ "mayBeStoriesCoOwner" ]
      },
      "tags" : [ "nypd", "incident", "crime", "nycopendata" ],
      "flags" : [ "restorable", "restorePossibleForType", "unsaved" ]
    }
  },
  "data" : [ [ "row-ki5f_gz5d~fzpp", "00000000-0000-0000-E544-FCCBB029F831", 0, 1563566845, null, 1563566935, null, "{ }", "405538879", "18", "MANHATTAN", "2016-01-01T00:00:00", "17:00:00", "2019-04-05T00:00:00", "04:36:00", "COMPLETED", null, "N.Y. POLICE DEPT", "361", "MISDEMEANOR", "INSIDE", "OFF. AGNST PUB ORD SENSBLTY &", null, "639", "AGGRAVATED HARASSMENT 2", "RESIDENCE - APT. HOUSE", "2019-05-15T00:00:00", "988408", "219412", "40.76891888700004", "-73.98499030199997", [ null, "40.768918887", "-73.984990302", null, false ], "12081", "12", "4", "10", "10" ]
, [ "row-3arv~qz23-559t", "00000000-0000-0000-126E-FE412A8E8988", 0, 1563566845, null, 1563566897, null, "{ }", "983297347", "23", "MANHATTAN", "2016-01-01T00:00:00", "08:00:00", "2017-12-31T00:00:00", "08:00:00", "ATTEMPTED", null, "N.Y. HOUSING POLICE", "116", "FELONY", "INSIDE", "SEX CRIMES", null, "177", "SEXUAL ABUSE", "RESIDENCE - PUBLIC HOUSING", "2019-04-28T00:00:00", "998730", "226827", "40.78926022400003", "-73.94771000099996", [ null, "40.789260224", "-73.947710001", null, false ], "12426", "7", "4", "35", "14" ]
, [ "row-7qjh.qfjr-fu5x", "00000000-0000-0000-46B5-C84D041FF59B", 0, 1558106958, null, 1558107009, null, "{ }", "403250906", "26", "MANHATTAN", "2016-01-01T00:00:00", "00:01:00", "2017-12-31T00:00:00", "23:59:00", "COMPLETED", "GRANT", "N.Y. HOUSING POLICE", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "175", "SEXUAL ABUSE 3,2", "RESIDENCE - PUBLIC HOUSING", "2019-01-02T00:00:00", "996241", "236149", "40.81485028900005", "-73.95668184799997", [ null, "40.814850289", "-73.956681848", null, false ], "12424", "37", "4", "23", "17" ]
, [ "row-59jh.awdm.dg3x", "00000000-0000-0000-878A-0284CD83B395", 0, 1558106958, null, 1558107052, null, "{ }", "235290134", "6", "MANHATTAN", "2016-01-01T00:00:00", "12:00:00", "2016-03-01T00:00:00", "12:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "578", "VIOLATION", "INSIDE", "HARRASSMENT 2", null, "638", "HARASSMENT,SUBD 3,4,5", "PHOTO/COPY", "2019-03-11T00:00:00", "981983", "208095", "40.73785727300003", "-74.00818192199995", [ null, "40.737857273", "-74.008181922", null, false ], "12077", "57", "4", "10", "3" ]
, [ "row-ke6j~9dgg~zpy6", "00000000-0000-0000-6864-AB7244166B49", 0, 1563566845, null, 1563566934, null, "{ }", "965893271", "25", "MANHATTAN", "2016-01-02T00:00:00", "09:00:00", "2017-01-02T00:00:00", "18:30:00", "COMPLETED", null, "N.Y. POLICE DEPT", "341", "MISDEMEANOR", "INSIDE", "PETIT LARCENY", null, "338", "LARCENY,PETIT FROM BUILDING,UN", "RESIDENCE - APT. HOUSE", "2019-06-04T00:00:00", "999525", "231804", "40.802919400000064", "-73.94482770699994", [ null, "40.8029194", "-73.944827707", null, false ], "13093", "18", "4", "36", "18" ]
, [ "row-eeda_ym2d_f27m", "00000000-0000-0000-24FA-16E5693EFCEF", 0, 1563566845, null, 1563566923, null, "{ }", "690833151", "25", "MANHATTAN", "2016-02-01T00:00:00", "13:00:00", "2018-09-01T00:00:00", "13:00:00", "COMPLETED", "WAGNER", "N.Y. HOUSING POLICE", "116", "FELONY", "INSIDE", "SEX CRIMES", null, "166", "SODOMY 2", "RESIDENCE - PUBLIC HOUSING", "2019-04-06T00:00:00", "1000555", "230994", "40.800694331000045", "-73.94110928599997", [ null, "40.800694331", "-73.941109286", null, false ], "13093", "7", "4", "36", "16" ]
, [ "row-fgtj_3n5t-65jw", "00000000-0000-0000-6842-3C46622E5496", 0, 1558106958, null, 1558107032, null, "{ }", "563999853", "5", "MANHATTAN", "2016-02-03T00:00:00", "20:40:00", "2019-02-03T00:00:00", "20:50:00", "COMPLETED", null, "N.Y. POLICE DEPT", "344", "MISDEMEANOR", "INSIDE", "ASSAULT 3 & RELATED OFFENSES", null, "101", "ASSAULT 3", "BAR/NIGHT CLUB", "2019-02-03T00:00:00", "985464", "200485", "40.71696988100007", "-73.99562209899995", [ null, "40.716969881", "-73.995622099", null, false ], "11723", "57", "4", "32", "2" ]
, [ "row-eive~rvzr~w2ns", "00000000-0000-0000-2770-8917DCD4E298", 0, 1558106958, null, 1558107062, null, "{ }", "877956688", "25", "MANHATTAN", "2016-02-20T00:00:00", "00:00:00", "2018-08-08T00:00:00", "00:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "175", "SEXUAL ABUSE 3,2", "RESIDENCE - APT. HOUSE", "2019-02-20T00:00:00", "1000555", "230994", "40.800694331000045", "-73.94110928599997", [ null, "40.800694331", "-73.941109286", null, false ], "13093", "7", "4", "36", "16" ]
, [ "row-ecin~f9hw-mw8b", "00000000-0000-0000-D99F-8CB0212E5820", 0, 1558106958, null, 1558107038, null, "{ }", "505910152", "28", "MANHATTAN", "2016-02-25T00:00:00", "20:11:00", "2019-02-25T00:00:00", "20:29:00", "COMPLETED", null, "N.Y. POLICE DEPT", "361", "MISDEMEANOR", "INSIDE", "OFF. AGNST PUB ORD SENSBLTY &", null, "639", "AGGRAVATED HARASSMENT 2", "RESIDENCE - APT. HOUSE", "2019-02-25T00:00:00", "998903", "231702", "40.802640491000034", "-73.94707461199994", [ null, "40.802640491", "-73.947074612", null, false ], "12423", "18", "4", "36", "18" ]
, [ "row-bf8n~grss-9ftn", "00000000-0000-0000-508A-53740C293AE5", 0, 1558106958, null, 1558107081, null, "{ }", "748658209", "34", "MANHATTAN", "2016-03-05T00:00:00", "00:00:00", "2019-03-04T00:00:00", "23:35:00", "COMPLETED", null, "N.Y. POLICE DEPT", "112", "FELONY", "INSIDE", "THEFT-FRAUD", null, "739", "FRAUD,UNCLASSIFIED-FELONY", "RESIDENCE - APT. HOUSE", "2019-03-05T00:00:00", "1003411", "248824", "40.84962687400008", "-73.93074276299996", [ null, "40.849626874", "-73.930742763", null, false ], "13091", "47", "4", "39", "22" ]
, [ "row-rs7z_aa2z_zk3v", "00000000-0000-0000-CE49-B9BC71335CEF", 0, 1558106958, null, 1558107071, null, "{ }", "849426894", "30", "MANHATTAN", "2016-03-06T00:00:00", "08:00:00", "2016-03-06T00:00:00", "09:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "116", "FELONY", "INSIDE", "SEX CRIMES", null, "177", "SEXUAL ABUSE", "RESIDENCE - APT. HOUSE", "2019-03-06T00:00:00", "999794", "241252", "40.82885104500008", "-73.94383419099995", [ null, "40.828851045", "-73.943834191", null, false ], "12428", "37", "4", "23", "19" ]
, [ "row-3cks~8jnb~enme", "00000000-0000-0000-C06B-27B2E9952207", 0, 1558106958, null, 1558107010, null, "{ }", "337642706", "23", "MANHATTAN", "2016-03-18T00:00:00", "13:40:00", "2019-03-12T00:00:00", "13:46:00", "COMPLETED", null, "N.Y. POLICE DEPT", "126", "FELONY", null, "MISCELLANEOUS PENAL LAW", null, "708", "IMPERSONATION 1, POLICE OFFICE", "STREET", "2019-03-18T00:00:00", "999049", "226734", "40.78900443500004", "-73.94655820499997", [ null, "40.789004435", "-73.946558205", null, false ], "12426", "7", "4", "35", "14" ]
, [ "row-jz7v.pyrg_wu9e", "00000000-0000-0000-F88A-B80317D7176A", 0, 1558106958, null, 1558107022, null, "{ }", "455393595", "32", "MANHATTAN", "2016-03-23T00:00:00", "00:01:00", "2017-03-23T00:00:00", "00:01:00", "COMPLETED", null, "N.Y. POLICE DEPT", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "175", "SEXUAL ABUSE 3,2", "RESIDENCE - APT. HOUSE", "2019-03-23T00:00:00", "999358", "236472", "40.81573205300003", "-73.94542041099999", [ null, "40.815732053", "-73.945420411", null, false ], "12427", "18", "4", "36", "20" ]
, [ "row-w8wh-zx6y_794y", "00000000-0000-0000-2643-5B6703180129", 0, 1558106958, null, 1558107009, null, "{ }", "546531997", "33", "MANHATTAN", "2016-03-24T00:00:00", "20:00:00", "2016-03-25T00:00:00", "08:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "341", "MISDEMEANOR", "FRONT OF", "PETIT LARCENY", null, "321", "LARCENY,PETIT FROM AUTO", "STREET", "2019-03-26T00:00:00", "999162", "243927", "40.83619424000005", "-73.94611193699996", [ null, "40.83619424", "-73.946111937", null, false ], "13090", "47", "4", "23", "21" ]
, [ "row-9yzr~cdmd.fkp5", "00000000-0000-0000-236D-03A6AD205BE9", 0, 1563566845, null, 1563566935, null, "{ }", "151621437", "9", "MANHATTAN", "2016-04-13T00:00:00", "22:00:00", null, null, "ATTEMPTED", null, "N.Y. POLICE DEPT", "106", "FELONY", null, "FELONY ASSAULT", null, "109", "ASSAULT 2,1,UNCLASSIFIED", "STREET", "2019-05-29T00:00:00", "991134", "203370", "40.72488591800004", "-73.97516535599993", [ null, "40.724885918", "-73.975165356", null, false ], "11729", "70", "4", "50", "5" ]
, [ "row-sb85~ufdr~3tf3", "00000000-0000-0000-B5DA-5EE93AD9C7FA", 0, 1558106958, null, 1558107073, null, "{ }", "181592115", "1", "MANHATTAN", "2016-04-21T00:00:00", "09:00:00", "2019-01-11T00:00:00", "09:30:00", "COMPLETED", null, "N.Y. POLICE DEPT", "340", "MISDEMEANOR", "FRONT OF", "FRAUDS", null, "718", "FRAUD,UNCLASSIFIED-MISDEMEANOR", "PUBLIC BUILDING", "2019-01-12T00:00:00", "982514", "197852", "40.709742835000036", "-74.00626316399996", [ null, "40.709742835", "-74.006263164", null, false ], "13096", "56", "4", "32", "1" ]
, [ "row-wchv.iit4-w6pe", "00000000-0000-0000-8D52-0BD7C2D8099A", 0, 1558106958, null, 1558107032, null, "{ }", "153768808", "32", "MANHATTAN", "2016-04-23T00:00:00", "04:00:00", "2016-04-28T00:00:00", "04:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "109", "FELONY", "INSIDE", "GRAND LARCENY", null, "407", "LARCENY,GRAND BY DISHONEST EMP", "GROCERY/BODEGA", "2019-03-22T00:00:00", "1001540", "241249", "40.828839565000074", "-73.93752514099998", [ null, "40.828839565", "-73.937525141", null, false ], "13097", "18", "4", "36", "20" ]
, [ "row-7kfz_cjfr~ykzy", "00000000-0000-0000-BB78-E02B1EE5F31E", 0, 1563566845, null, 1563566936, null, "{ }", "321009695", "34", "MANHATTAN", "2016-04-25T00:00:00", "18:00:00", "2019-04-25T00:00:00", "19:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "578", "VIOLATION", "INSIDE", "HARRASSMENT 2", null, "637", "HARASSMENT,SUBD 1,CIVILIAN", "HOMELESS SHELTER", "2019-06-17T00:00:00", "1005771", "253980", "40.86377311300004", "-73.92219584099996", [ null, "40.863773113", "-73.922195841", null, false ], "13092", "47", "4", "39", "22" ]
, [ "row-tnxt.synz-4t5x", "00000000-0000-0000-A76A-88DFBD787637", 0, 1563566845, null, 1563566902, null, "{ }", "250595754", "5", "MANHATTAN", "2016-05-26T00:00:00", "00:00:00", "2019-02-27T00:00:00", "23:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "109", "FELONY", "INSIDE", "GRAND LARCENY", null, "426", "LARCENY,GRAND BY BANK ACCT COMPROMISE-TELLER", "BANK", "2019-05-09T00:00:00", "982932", "200142", "40.71602841300006", "-74.00475589499997", [ null, "40.716028413", "-74.004755895", null, false ], "11728", "56", "4", "32", "1" ]
, [ "row-ckef~x9gt_vjfz", "00000000-0000-0000-DD4B-3177A9E560E6", 0, 1563566845, null, 1563566933, null, "{ }", "162814945", "34", "MANHATTAN", "2016-05-27T00:00:00", "12:00:00", "2017-02-14T00:00:00", "12:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "113", "FELONY", "INSIDE", "FORGERY", null, "729", "FORGERY,ETC.,UNCLASSIFIED-FELO", "RESIDENCE - APT. HOUSE", "2019-04-02T00:00:00", "1004619", "254992", "40.86655347800007", "-73.92635762799993", [ null, "40.866553478", "-73.926357628", null, false ], "13092", "47", "4", "39", "22" ]
, [ "row-j63t~5xsh.b659", "00000000-0000-0000-B91B-306470F5EE56", 0, 1558106958, null, 1558107026, null, "{ }", "738608402", "25", "MANHATTAN", "2016-06-01T00:00:00", "00:01:00", "2017-07-01T00:00:00", "23:59:00", "COMPLETED", null, "N.Y. HOUSING POLICE", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "170", "SEXUAL MISCONDUCT,INTERCOURSE", "RESIDENCE - PUBLIC HOUSING", "2019-03-15T00:00:00", "1000555", "230994", "40.800694331000045", "-73.94110928599997", [ null, "40.800694331", "-73.941109286", null, false ], "13093", "7", "4", "36", "16" ]
, [ "row-7shi_fwa3~kmhu", "00000000-0000-0000-1E61-314F9FBA1CD2", 0, 1563566845, null, 1563566899, null, "{ }", "196443135", "18", "MANHATTAN", "2016-06-16T00:00:00", "18:00:00", "2019-06-16T00:00:00", "18:30:00", "ATTEMPTED", null, "N.Y. POLICE DEPT", "105", "FELONY", null, "ROBBERY", null, "386", "ROBBERY,PERSONAL ELECTRONIC DEVICE", "STREET", "2019-06-17T00:00:00", "991518", "216299", "40.76037249500007", "-73.97376599299997", [ null, "40.760372495", "-73.973765993", null, false ], "12419", "11", "4", "51", "10" ]
, [ "row-yjnj_tkqp~q6pd", "00000000-0000-0000-4DC1-2739DE086837", 0, 1558106958, null, 1558107011, null, "{ }", "141577142", "28", "MANHATTAN", "2016-07-01T00:00:00", "19:00:00", "2018-05-31T00:00:00", "18:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "361", "MISDEMEANOR", "INSIDE", "OFF. AGNST PUB ORD SENSBLTY &", null, "639", "AGGRAVATED HARASSMENT 2", "OTHER", "2019-01-16T00:00:00", "995918", "231111", "40.80102280400007", "-73.95785749799995", [ null, "40.801022804", "-73.957857498", null, false ], "12423", "18", "4", "36", "18" ]
, [ "row-bcsm~ypnk~md6f", "00000000-0000-0000-D1F1-095BD2593DF3", 0, 1563566845, null, 1563566911, null, "{ }", "759318544", "9", "MANHATTAN", "2016-08-13T00:00:00", "23:00:00", null, null, "ATTEMPTED", null, "N.Y. POLICE DEPT", "106", "FELONY", null, "FELONY ASSAULT", null, "109", "ASSAULT 2,1,UNCLASSIFIED", "STREET", "2019-05-01T00:00:00", "990600", "203948", "40.726472786000045", "-73.97709137499999", [ null, "40.726472786", "-73.977091375", null, false ], "11729", "70", "4", "50", "5" ]
, [ "row-6yn4~m2e3~cxa6", "00000000-0000-0000-60CE-8190ECE8E1D2", 0, 1563566845, null, 1563566894, null, "{ }", "110241037", "1", "MANHATTAN", "2016-08-15T00:00:00", "12:00:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "341", "MISDEMEANOR", "FRONT OF", "PETIT LARCENY", null, "349", "LARCENY,PETIT OF LICENSE PLATE", "STREET", "2019-05-17T00:00:00", "981926", "196411", "40.70578749500004", "-74.00838356999998", [ null, "40.705787495", "-74.00838357", null, false ], "11726", "56", "4", "32", "1" ]
, [ "row-yc26-mup4.5agn", "00000000-0000-0000-8DC4-A1B88FFB5F08", 0, 1558106958, null, 1558107041, null, "{ }", "851935504", "33", "MANHATTAN", "2016-08-17T00:00:00", "07:27:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "112", "FELONY", null, "THEFT-FRAUD", null, "739", "FRAUD,UNCLASSIFIED-FELONY", "STREET", "2019-01-04T00:00:00", "1001494", "248376", "40.84840119800003", "-73.93767303599996", [ null, "40.848401198", "-73.937673036", null, false ], "13091", "47", "4", "39", "21" ]
, [ "row-ngvb~pxrp.shd4", "00000000-0000-0000-0B26-73400FEC04BE", 0, 1563566845, null, 1563566895, null, "{ }", "516230897", "18", "MANHATTAN", "2016-08-18T00:00:00", "00:01:00", "2016-10-12T00:00:00", "23:59:00", "COMPLETED", null, "N.Y. POLICE DEPT", "109", "FELONY", "INSIDE", "GRAND LARCENY", null, "407", "LARCENY,GRAND BY DISHONEST EMP", "COMMERCIAL BUILDING", "2019-04-03T00:00:00", "991242", "214811", "40.756288537000046", "-73.97476382199994", [ null, "40.756288537", "-73.974763822", null, false ], "12079", "11", "4", "51", "10" ]
, [ "row-8z2b~8zcx-cvcu", "00000000-0000-0000-B2FD-9322741A08E7", 0, 1558106958, null, 1558107090, null, "{ }", "636533717", "1", "MANHATTAN", "2016-08-24T00:00:00", "12:00:00", "2019-02-28T00:00:00", "12:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "341", "MISDEMEANOR", "INSIDE", "PETIT LARCENY", null, "338", "LARCENY,PETIT FROM BUILDING,UN", "RESIDENCE - APT. HOUSE", "2019-02-28T00:00:00", "981926", "196411", "40.70578749500004", "-74.00838356999998", [ null, "40.705787495", "-74.00838357", null, false ], "11726", "56", "4", "32", "1" ]
, [ "row-pnmw~hgb9_wb4a", "00000000-0000-0000-2ABB-CDE6A8ED75B3", 0, 1563566845, null, 1563566913, null, "{ }", "391004093", "18", "MANHATTAN", "2016-09-01T00:00:00", "08:00:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "578", "VIOLATION", null, "HARRASSMENT 2", null, "638", "HARASSMENT,SUBD 3,4,5", "STREET", "2019-04-08T00:00:00", "988696", "216220", "40.760157529000026", "-73.98395267899997", [ null, "40.760157529", "-73.983952679", null, false ], "12081", "11", "4", "51", "10" ]
, [ "row-236q~vbew-f9ug", "00000000-0000-0000-DDDA-435835218EC4", 0, 1558106958, null, 1558107033, null, "{ }", "246724531", "10", "MANHATTAN", "2016-09-01T00:00:00", "14:50:00", "2019-03-20T00:00:00", "14:51:00", "COMPLETED", null, "N.Y. POLICE DEPT", "112", "FELONY", "INSIDE", "THEFT-FRAUD", null, "739", "FRAUD,UNCLASSIFIED-FELONY", "RESIDENCE - APT. HOUSE", "2019-03-23T00:00:00", "982246", "210981", "40.745778689000076", "-74.00723374599994", [ null, "40.745778689", "-74.007233746", null, false ], "12074", "12", "4", "10", "6" ]
, [ "row-3xke~6j32.qcy3", "00000000-0000-0000-829F-5BC7EE165174", 0, 1563566845, null, 1563566905, null, "{ }", "208047225", "18", "MANHATTAN", "2016-09-16T00:00:00", "17:03:00", "2016-09-16T00:00:00", "17:05:00", "COMPLETED", null, "N.Y. POLICE DEPT", "109", "FELONY", "INSIDE", "GRAND LARCENY", null, "405", "LARCENY,GRAND BY THEFT OF CREDIT CARD", "COMMERCIAL BUILDING", "2019-05-16T00:00:00", "991677", "215466", "40.75808599000004", "-73.973192967", [ null, "40.75808599", "-73.973192967", null, false ], "10351", "11", "4", "51", "10" ]
, [ "row-rme9.3d34.kag5", "00000000-0000-0000-66A7-29980A522F06", 0, 1558106958, null, 1558107053, null, "{ }", "680585582", "34", "MANHATTAN", "2016-09-16T00:00:00", "18:57:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "112", "FELONY", null, "THEFT-FRAUD", null, "739", "FRAUD,UNCLASSIFIED-FELONY", "STREET", "2019-01-04T00:00:00", "1003372", "248278", "40.848128350000025", "-73.93088528799996", [ null, "40.84812835", "-73.930885288", null, false ], "13091", "47", "4", "39", "22" ]
, [ "row-4p8f.8w7f-yngn", "00000000-0000-0000-2AEF-50F84D460F9C", 0, 1558106958, null, 1558107099, null, "{ }", "437013982", "26", "MANHATTAN", "2016-09-28T00:00:00", "13:30:00", "2018-01-25T00:00:00", "17:30:00", "COMPLETED", null, "N.Y. POLICE DEPT", "116", "FELONY", "INSIDE", "SEX CRIMES", null, "168", "SODOMY 1", "PUBLIC SCHOOL", "2019-01-02T00:00:00", "996241", "236149", "40.81485028900005", "-73.95668184799997", [ null, "40.814850289", "-73.956681848", null, false ], "12424", "37", "4", "23", "17" ]
, [ "row-gkyb_tp66~8yc8", "00000000-0000-0000-6F3E-3A9D9F1F2482", 0, 1558106958, null, 1558107009, null, "{ }", "726341940", "7", "MANHATTAN", "2016-10-01T00:00:00", "08:00:00", "2016-10-31T00:00:00", "15:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "175", "SEXUAL ABUSE 3,2", "PUBLIC SCHOOL", "2019-01-15T00:00:00", "988708", "200317", "40.71650772200008", "-73.98391989899994", [ null, "40.716507722", "-73.983919899", null, false ], "11723", "70", "4", "32", "4" ]
, [ "row-f8rd-gjrk_iv36", "00000000-0000-0000-3396-BAADECFCA8DC", 0, 1558106958, null, 1558107090, null, "{ }", "305070094", "9", "MANHATTAN", "2016-10-03T00:00:00", "15:00:00", "2016-10-03T00:00:00", "15:40:00", "COMPLETED", null, "N.Y. POLICE DEPT", "104", "FELONY", "INSIDE", "RAPE", null, "157", "RAPE 1", "RESIDENCE - APT. HOUSE", "2019-01-22T00:00:00", "987624", "203977", "40.72655401900005", "-73.98782842699995", [ null, "40.726554019", "-73.987828427", null, false ], "11724", "70", "4", "50", "5" ]
, [ "row-5i2v_fzd3.t7xy", "00000000-0000-0000-8A90-7898DB9DEFC6", 0, 1558106958, null, 1558107099, null, "{ }", "309974238", "10", "MANHATTAN", "2016-10-09T00:00:00", "21:50:00", "2016-10-10T00:00:00", "06:54:00", "COMPLETED", null, "N.Y. POLICE DEPT", "106", "FELONY", null, "FELONY ASSAULT", null, "109", "ASSAULT 2,1,UNCLASSIFIED", "STREET", "2019-03-28T00:00:00", "984928", "211276", "40.74658859200008", "-73.99755456399998", [ null, "40.746588592", "-73.997554564", null, false ], "11722", "12", "4", "10", "6" ]
, [ "row-aqag~am57_qh65", "00000000-0000-0000-13C7-2A7009F6F895", 0, 1558106958, null, 1558107036, null, "{ }", "266120857", "32", "MANHATTAN", "2016-10-20T00:00:00", "23:00:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "233", "MISDEMEANOR", "INSIDE", "SEX CRIMES", null, "175", "SEXUAL ABUSE 3,2", "RESIDENCE - APT. HOUSE", "2019-03-01T00:00:00", "999358", "236472", "40.81573205300003", "-73.94542041099999", [ null, "40.815732053", "-73.945420411", null, false ], "12427", "18", "4", "36", "20" ]
, [ "row-ft6a.4e7u_qh3q", "00000000-0000-0000-CB2A-F43D0C0C57CE", 0, 1558106958, null, 1558107025, null, "{ }", "384040746", "5", "MANHATTAN", "2016-10-28T00:00:00", "15:00:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "125", "FELONY", "INSIDE", "NYS LAWS-UNCLASSIFIED FELONY", null, "847", "NY STATE LAWS,UNCLASSIFIED FEL", "RESIDENCE - APT. HOUSE", "2019-02-22T00:00:00", "983903", "200257", "40.71634415200003", "-74.00125319299997", [ null, "40.716344152", "-74.001253193", null, false ], "12076", "56", "4", "32", "2" ]
, [ "row-cxs3~isv3_qdt8", "00000000-0000-0000-0C52-65057BEA9C73", 0, 1563566845, null, 1563566928, null, "{ }", "539609190", "30", "MANHATTAN", "2016-11-19T00:00:00", "00:00:00", "2018-08-28T00:00:00", "00:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "112", "FELONY", "INSIDE", "THEFT-FRAUD", null, "739", "FRAUD,UNCLASSIFIED-FELONY", "RESIDENCE - APT. HOUSE", "2019-05-24T00:00:00", "998758", "240846", "40.827738453000045", "-73.947578589", [ null, "40.827738453", "-73.947578589", null, false ], "12428", "37", "4", "23", "19" ]
, [ "row-dqdv.46iy~e5u2", "00000000-0000-0000-6E97-721DA45F6DE0", 0, 1558106958, null, 1558107020, null, "{ }", "871013873", "19", "MANHATTAN", "2016-12-03T00:00:00", "14:30:00", "2018-08-12T00:00:00", "13:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "340", "MISDEMEANOR", "FRONT OF", "FRAUDS", null, "718", "FRAUD,UNCLASSIFIED-MISDEMEANOR", "RESIDENCE-HOUSE", "2019-01-15T00:00:00", "996750", "218838", "40.76733554700007", "-73.95487521099994", [ null, "40.767335547", "-73.954875211", null, false ], "12083", "23", "4", "1", "11" ]
, [ "row-5su5~fssb.3cue", "00000000-0000-0000-861B-7B0148D3D6D2", 0, 1558106958, null, 1558107092, null, "{ }", "407241454", "28", "MANHATTAN", "2016-12-08T00:00:00", "19:00:00", "2016-12-08T00:00:00", "22:00:00", "COMPLETED", null, "N.Y. POLICE DEPT", "104", "FELONY", "INSIDE", "RAPE", null, "153", "RAPE 3", "RESIDENCE - APT. HOUSE", "2019-03-06T00:00:00", "997376", "233927", "40.80874990400008", "-73.95258580599993", [ null, "40.808749904", "-73.952585806", null, false ], "12424", "18", "4", "36", "18" ]
, [ "row-dixp_92vf~besf", "00000000-0000-0000-D524-E849C96D9DDA", 0, 1563566845, null, 1563566900, null, "{ }", "885176771", "5", "MANHATTAN", "2016-12-16T00:00:00", "17:00:00", null, null, "COMPLETED", null, "N.Y. POLICE DEPT", "125", "FELONY", "INSIDE", "NYS LAWS-UNCLASSIFIED FELONY", null, "847", "NY STATE LAWS,UNCLASSIFIED FEL", "PUBLIC BUILDING", "2019-04-10T00:00:00", "983903", "200257", "40.71634415200003", "-74.00125319299997", [ null, "40.716344152", "-74.001253193", null, false ], "12076", "56", "4", "32", "2" ]
, [ "row-qxm8_3ki2.r5uh", "00000000-0000-0000-59B1-8D5526A7DC47", 0, 1563566845, null, 1563566922, null, "{ }", "939503246", "32", "MANHATTAN", "2016-12-26T00:00:00", "23:59:00", "2016-12-27T00:00:00", "00:59:00", "COMPLETED", null, "N.Y. POLICE DEPT", "104", "FELONY", "INSIDE", "RAPE", null, "157", "RAPE 1", "RESIDENCE - APT. HOUSE", "2019-06-11T00:00:00", "999358", "236472", "40.81573205300003", "-73.94542041099999", [ null, "40.815732053", "-73.945420411", null, false ], "12427", "18", "4", "36", "20" ]
 ]
}