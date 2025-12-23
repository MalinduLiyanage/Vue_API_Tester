<template>
  <div>Hello This is a View</div>
  <v-container>Test Container</v-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {OpenAPIDocument} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";

export default defineComponent({
  name: "HomeView",
  data(){
    return{
      jsonObj: new OpenAPIDocument()
    }
  },
  mounted() {
    const sampleData = {
      "openapi": "3.0.1",
      "info": {
        "title": "Customer Onboarding Service",
        "version": "v2"
      },
      "paths": {
        "/api/activity-log/list": {
          "post": {
            "tags": [
              "ActivityLog"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/activity-log/audit-report-get-all-data": {
          "post": {
            "tags": [
              "ActivityLog"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/activity-log/audit-report": {
          "post": {
            "tags": [
              "ActivityLog"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/assign-role/assign-role-to-user": {
          "post": {
            "tags": [
              "AssignRole"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssignRoleRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssignRoleRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssignRoleRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/auth/test": {
          "get": {
            "tags": [
              "Auth"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/auth/login": {
          "post": {
            "tags": [
              "Auth"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/auth/token": {
          "post": {
            "tags": [
              "Auth"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/create": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCreateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCreateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCreateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/biller/approve": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/get-for-edit": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/retrieve": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetByIdRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetByIdRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetByIdRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/biller/edit": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/biller/list": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/get-biller-name-list": {
          "post": {
            "tags": [
              "Biller"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/get-biller-by-category": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategory"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategory"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategory"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/directpay-api-action": {
          "get": {
            "tags": [
              "Biller"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/service/meta-data": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerServiceMetaDataRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerServiceMetaDataRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerServiceMetaDataRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/biller-list": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategoryAndChannelRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategoryAndChannelRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillersForCategoryAndChannelRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller/authentication/test-endpoint": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticationRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticationRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthenticationRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/biller/authentication/generate-token": {
          "post": {
            "tags": [
              "Biller"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerAuthenticationRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerAuthenticationRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerAuthenticationRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/biller/headers": {
          "get": {
            "tags": [
              "Biller"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/list": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/create": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryCreateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryCreateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryCreateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/approve": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/get-for-edit": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/edit": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BillerCategoryEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/get-biller-category-name-list": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/get-biller-category-list-with-billers": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/biller-category/categories": {
          "post": {
            "tags": [
              "BillerCategory"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerCategoryRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerCategoryRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetBillerCategoryRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/create": {
          "post": {
            "tags": [
              "Channel"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelCreateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelCreateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelCreateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/approve": {
          "post": {
            "tags": [
              "Channel"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/get-for-edit": {
          "post": {
            "tags": [
              "Channel"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/edit": {
          "post": {
            "tags": [
              "Channel"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChannelEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/list": {
          "post": {
            "tags": [
              "Channel"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataListSearchRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/channel/get-channel-name-list": {
          "post": {
            "tags": [
              "Channel"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/channel/auth/token": {
          "post": {
            "tags": [
              "ChannelAuthentication"
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/dashboard/top-channel": {
          "post": {
            "tags": [
              "Dashboard"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/dashboard/top-biller": {
          "post": {
            "tags": [
              "Dashboard"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/dashboard/top-ten-biller-and-channel": {
          "post": {
            "tags": [
              "Dashboard"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/dashboard/transaction-overview": {
          "post": {
            "tags": [
              "Dashboard"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionOverviewRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/dual-auth/list": {
          "post": {
            "tags": [
              "DualAuth"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/dual-auth/get-record-for-approve": {
          "post": {
            "tags": [
              "DualAuth"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthRecordByIdRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthRecordByIdRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetDualAuthRecordByIdRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/external-billers/cash-in": {
          "post": {
            "tags": [
              "ExternalBillers"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CashInApiRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CashInApiRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CashInApiRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/external-billers/validate-account": {
          "post": {
            "tags": [
              "ExternalBillers"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateAccountRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateAccountRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateAccountRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/external-billers/check-wallet-balnce": {
          "post": {
            "tags": [
              "ExternalBillers"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CheckBalanceRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CheckBalanceRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/CheckBalanceRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/notification": {
          "post": {
            "tags": [
              "Notification"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/notification/clear": {
          "post": {
            "tags": [
              "Notification"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ClearSpecifyNotificationRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ClearSpecifyNotificationRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ClearSpecifyNotificationRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/notification/clear-all": {
          "post": {
            "tags": [
              "Notification"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/report/transaction": {
          "post": {
            "tags": [
              "ReportGenerate"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionReportGenerateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionReportGenerateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionReportGenerateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/report/audit": {
          "post": {
            "tags": [
              "ReportGenerate"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ActivityLogListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/role/list": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/get-role-name-list": {
          "post": {
            "tags": [
              "Role"
            ],
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/get-for-edit": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/edit": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/initial-create-data": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/create": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleCreateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleCreateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/RoleCreateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/role/approve": {
          "post": {
            "tags": [
              "Role"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/storage/stream/{key}": {
          "get": {
            "tags": [
              "Storage"
            ],
            "parameters": [
              {
                "name": "key",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/Stream"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Stream"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Stream"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/transaction/list": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionListRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionListRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionListRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/transaction-view-by-id": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionViewByIdRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionViewByIdRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionViewByIdRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/transaction-re-post": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionRePostRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionRePostRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionRePostRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/BaseResponse"
                    }
                  }
                }
              }
            }
          }
        },
        "/api/transaction/approve": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionApproveRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionApproveRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionApproveRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/transaction-report": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionReportRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionReportRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionReportRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/store-transaction-test": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionStoreRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionStoreRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TrasactionStoreRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/store-transaction": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreTrasactionRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreTrasactionRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreTrasactionRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/transaction-process": {
          "post": {
            "tags": [
              "Transaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/v2/transaction/transaction-process": {
          "post": {
            "tags": [
              "TransactionControllerV2"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionRequestV2"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionRequestV2"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionRequestV2"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/v2/transaction/transaction-process-test": {
          "post": {
            "tags": [
              "TransactionControllerV2"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ProcessTransactionRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction-status/check": {
          "post": {
            "tags": [
              "TransactionStatusInquiryControllerV2"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionStatusInquiryRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionStatusInquiryRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionStatusInquiryRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/list": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/list-for-dual-auth": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/get-for-edit": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetItemForEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/edit": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEditRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEditRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEditRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/create": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserCreateRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserCreateRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserCreateRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/approve": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ApprovalRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/initial-create-data": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/BaseRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/change-password": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserChangePasswordRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserChangePasswordRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserChangePasswordRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/user/reset-password": {
          "post": {
            "tags": [
              "User"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserResetPasswordRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserResetPasswordRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserResetPasswordRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/transaction/transaction-validate": {
          "post": {
            "tags": [
              "ValidateTransaction"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateTransactionRequest"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateTransactionRequest"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidateTransactionRequest"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        },
        "/api/v2/transaction/validate": {
          "post": {
            "tags": [
              "ValidateTransactionControllerV2"
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationRequestV2"
                  }
                },
                "text/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationRequestV2"
                  }
                },
                "application/*+json": {
                  "schema": {
                    "$ref": "#/components/schemas/ValidationRequestV2"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Success"
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "ActivityLogListRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "role": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "AddressDetail": {
            "required": [
              "isPrimary",
              "type"
            ],
            "type": "object",
            "properties": {
              "street1": {
                "type": "string",
                "nullable": true
              },
              "street2": {
                "type": "string",
                "nullable": true
              },
              "street3": {
                "type": "string",
                "nullable": true
              },
              "city": {
                "type": "string",
                "nullable": true
              },
              "stateOrProvince": {
                "type": "string",
                "nullable": true
              },
              "country": {
                "type": "string",
                "nullable": true
              },
              "postalCode": {
                "type": "string",
                "nullable": true
              },
              "isPrimary": {
                "type": "boolean"
              },
              "type": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "ApprovalRequest": {
            "required": [
              "action_taken",
              "change_request_id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "action_taken": {
                "maxLength": 30,
                "type": "string"
              },
              "change_request_id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "AssignRoleRequest": {
            "type": "object",
            "properties": {
              "user_id": {
                "type": "integer",
                "format": "int64"
              },
              "role_id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "AuditInfo": {
            "required": [
              "performedBy",
              "performedDatetime"
            ],
            "type": "object",
            "properties": {
              "performedBy": {
                "type": "string"
              },
              "performedDatetime": {
                "type": "string",
                "format": "date-time"
              }
            },
            "additionalProperties": false
          },
          "AuthConfigs": {
            "required": [
              "key",
              "value"
            ],
            "type": "object",
            "properties": {
              "key": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "AuthDataModel": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "email": {
                "type": "string",
                "nullable": true
              },
              "userType": {
                "type": "string",
                "nullable": true
              },
              "role": {
                "type": "string",
                "nullable": true
              },
              "branch": {
                "type": "string",
                "nullable": true
              },
              "permissions": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "nullable": true
              },
              "userName": {
                "type": "string",
                "nullable": true
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "ip": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "AuthenticateRequest": {
            "required": [
              "password",
              "user_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "user_name": {
                "type": "string"
              },
              "password": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "AuthenticationRequest": {
            "required": [
              "auth_type",
              "biller_token",
              "biller_token_path",
              "client_secret",
              "endpoint",
              "token_expiry_period"
            ],
            "type": "object",
            "properties": {
              "auth_type": {
                "type": "string"
              },
              "endpoint": {
                "type": "string"
              },
              "client_secret": {
                "type": "string"
              },
              "oauth2_type": {
                "type": "string",
                "nullable": true
              },
              "oauth2_configs": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AuthConfigs"
                },
                "nullable": true
              },
              "biller_token": {
                "type": "string"
              },
              "biller_token_path": {
                "type": "string"
              },
              "token_expiry_period": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "AuthenticationRequestForBillerCreation": {
            "required": [
              "auth_type",
              "biller_token",
              "biller_token_path",
              "client_secret",
              "endpoint",
              "token_expiry_period"
            ],
            "type": "object",
            "properties": {
              "auth_type": {
                "type": "string"
              },
              "endpoint": {
                "type": "string"
              },
              "client_secret": {
                "type": "string"
              },
              "oauth2_type": {
                "type": "string",
                "nullable": true
              },
              "oauth2_configs": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AuthConfigs"
                },
                "nullable": true
              },
              "biller_token": {
                "type": "string"
              },
              "biller_token_path": {
                "type": "string"
              },
              "token_expiry_period": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "Base64Document": {
            "required": [
              "base64",
              "isUpdated",
              "mimeType",
              "name"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "base64": {
                "type": "string"
              },
              "mimeType": {
                "type": "string"
              },
              "isUpdated": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "BaseRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "BaseResponse": {
            "type": "object",
            "properties": {
              "status_code": {
                "type": "integer",
                "format": "int32"
              },
              "data": {
                "nullable": true
              },
              "message": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerAuthenticationData": {
            "required": [
              "auth_type",
              "biller_token",
              "biller_token_path",
              "client_secret",
              "endpoint",
              "token_expiry_period"
            ],
            "type": "object",
            "properties": {
              "auth_type": {
                "type": "string"
              },
              "endpoint": {
                "type": "string"
              },
              "client_secret": {
                "type": "string"
              },
              "oauth2_type": {
                "type": "string",
                "nullable": true
              },
              "oauth2_configs": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AuthConfigs"
                },
                "nullable": true
              },
              "biller_token": {
                "type": "string"
              },
              "biller_token_path": {
                "type": "string"
              },
              "token_expiry_period": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "BillerAuthenticationRequest": {
            "required": [
              "auth_type",
              "biller_id",
              "biller_token",
              "biller_token_path",
              "client_secret",
              "endpoint",
              "token_expiry_period"
            ],
            "type": "object",
            "properties": {
              "auth_type": {
                "type": "string"
              },
              "endpoint": {
                "type": "string"
              },
              "client_secret": {
                "type": "string"
              },
              "oauth2_type": {
                "type": "string",
                "nullable": true
              },
              "oauth2_configs": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AuthConfigs"
                },
                "nullable": true
              },
              "biller_token": {
                "type": "string"
              },
              "biller_token_path": {
                "type": "string"
              },
              "token_expiry_period": {
                "type": "integer",
                "format": "int32"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "BillerCategory": {
            "required": [
              "biller_category_id",
              "biller_category_name",
              "id"
            ],
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_category_id": {
                "type": "string"
              },
              "biller_category_name": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "BillerCategoryCreateRequest": {
            "required": [
              "active_status",
              "biller_category_id",
              "biller_category_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "biller_category_id": {
                "type": "string"
              },
              "biller_category_name": {
                "type": "string"
              },
              "active_status": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "BillerCategoryEditRequest": {
            "required": [
              "active_status",
              "biller_category_id",
              "biller_category_name",
              "id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "biller_category_id": {
                "type": "string"
              },
              "biller_category_name": {
                "type": "string"
              },
              "active_status": {
                "type": "boolean"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "BillerClassPropertyMetadata": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              },
              "regex": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerContactMediums": {
            "type": "object",
            "properties": {
              "emailAddress": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerListMetadata"
                },
                "nullable": true
              },
              "phoneNumber": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerListMetadata"
                },
                "nullable": true
              },
              "socialNetworkId": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerListMetadata"
                },
                "nullable": true
              },
              "address": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerListAddressMetadata"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerCreateRequest": {
            "required": [
              "account_number",
              "active_status",
              "base_url",
              "biller_category_id",
              "biller_code",
              "biller_name",
              "biller_version",
              "commission_rate_type",
              "commission_to_biller",
              "commission_to_combank",
              "commission_to_paymedia",
              "commission_type",
              "image",
              "maximum_commission_cap",
              "total_commission",
              "transaction"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "biller_code": {
                "type": "string"
              },
              "biller_name": {
                "type": "string"
              },
              "base_url": {
                "type": "string"
              },
              "image": {
                "$ref": "#/components/schemas/Base64Document"
              },
              "account_number": {
                "type": "string"
              },
              "biller_version": {
                "type": "string"
              },
              "commission_type": {
                "type": "string"
              },
              "commission_rate_type": {
                "type": "string"
              },
              "total_commission": {
                "type": "number",
                "format": "double"
              },
              "commission_to_paymedia": {
                "type": "number",
                "format": "double"
              },
              "commission_to_combank": {
                "type": "number",
                "format": "double"
              },
              "commission_to_biller": {
                "type": "number",
                "format": "double"
              },
              "maximum_commission_cap": {
                "type": "number",
                "format": "double"
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64"
              },
              "transaction": {
                "$ref": "#/components/schemas/TransactionRequestDto"
              },
              "validation": {
                "$ref": "#/components/schemas/ValidationRequestDto"
              },
              "statusCheck": {
                "$ref": "#/components/schemas/StatusCheckRequestDto"
              },
              "authentication": {
                "$ref": "#/components/schemas/AuthenticationRequestForBillerCreation"
              },
              "slab_commission": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/SlabCommission"
                },
                "nullable": true
              },
              "active_status": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "BillerCustomData": {
            "type": "object",
            "properties": {
              "characteristics": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerCustomMetadata"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerCustomDetails": {
            "required": [
              "characteristics"
            ],
            "type": "object",
            "properties": {
              "characteristics": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Characteristic"
                }
              }
            },
            "additionalProperties": false
          },
          "BillerCustomMetadata": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "characterType": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerEditRequest": {
            "required": [
              "id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_general_info": {
                "$ref": "#/components/schemas/BillerGeneralInfoBase64Image"
              },
              "biller_service_meta_data_info": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerServiceMetaDataInfo"
                },
                "nullable": true
              },
              "biller_slab_commission_info": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerSlabCommissionInfo"
                },
                "nullable": true
              },
              "biller_authentication": {
                "$ref": "#/components/schemas/BillerAuthenticationData"
              }
            },
            "additionalProperties": false
          },
          "BillerGeneralInfoBase64Image": {
            "required": [
              "accountNumber",
              "billerCategoryId",
              "billerCode",
              "billerVersion",
              "createdBy",
              "image",
              "isActive",
              "isLocked",
              "name"
            ],
            "type": "object",
            "properties": {
              "billerCode": {
                "type": "string"
              },
              "billerCategoryId": {
                "type": "integer",
                "format": "int64"
              },
              "baseUrl": {
                "type": "string",
                "nullable": true
              },
              "createdBy": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              },
              "isActive": {
                "type": "boolean"
              },
              "isLocked": {
                "type": "boolean"
              },
              "commissionType": {
                "type": "string",
                "nullable": true
              },
              "commissionRate": {
                "type": "string",
                "nullable": true
              },
              "totalCommission": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "commissionToPaymedia": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "commissionToCombank": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "commissionToBiller": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "maximumCommissionCap": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "commissionFlatOrPercentage": {
                "type": "string",
                "nullable": true
              },
              "billerVersion": {
                "type": "string"
              },
              "accountNumber": {
                "type": "string"
              },
              "image": {
                "$ref": "#/components/schemas/Base64Document"
              }
            },
            "additionalProperties": false
          },
          "BillerIdentificationTypeMetaData": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              },
              "regex": {
                "type": "string",
                "nullable": true
              },
              "type": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerListAddressMetadata": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              },
              "regex": {
                "type": "string",
                "nullable": true
              },
              "isPrimary": {
                "type": "boolean"
              },
              "type": {
                "type": "string",
                "nullable": true
              },
              "street1": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "street2": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "street3": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "city": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "state_or_province": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "country": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "postal_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              }
            },
            "additionalProperties": false
          },
          "BillerListMetadata": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              },
              "regex": {
                "type": "string",
                "nullable": true
              },
              "isPrimary": {
                "type": "boolean"
              },
              "type": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "BillerMetaData": {
            "type": "object",
            "properties": {
              "isRequired": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "BillerServiceMetaDataInfo": {
            "required": [
              "biller_id",
              "id"
            ],
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              },
              "serviceName": {
                "type": "string",
                "nullable": true
              },
              "request": {
                "$ref": "#/components/schemas/BillerServiceRequestMetaData"
              },
              "response": {
                "$ref": "#/components/schemas/BillerServiceResponseMetaData"
              }
            },
            "additionalProperties": false
          },
          "BillerServiceRequestMetaData": {
            "type": "object",
            "properties": {
              "billerPrimaryId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "identificationTypes": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerClassPropertyMetadata"
                },
                "nullable": true
              },
              "identificationNumber": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "currencyCode": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "amount": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customerContactMediums": {
                "$ref": "#/components/schemas/BillerContactMediums"
              },
              "billerCustomDetails": {
                "$ref": "#/components/schemas/BillerCustomData"
              },
              "billerCollectionRefId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "billerReferenceId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "bankReferenceId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "paymentDateTime": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "drcrIndicator": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "billerPaymentRefId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              }
            },
            "additionalProperties": false
          },
          "BillerServiceResponseMetaData": {
            "type": "object",
            "properties": {
              "statusCode": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "statusMessage": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "billerCollectionRefId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "billerSpecificRefId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customerName": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "currencyCode": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "totalAmountDue": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "minimumAcceptableAmount": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customerContactMediums": {
                "$ref": "#/components/schemas/BillerContactMediums"
              },
              "billerCustomDetails": {
                "$ref": "#/components/schemas/BillerCustomData"
              },
              "billerPaymentRefId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "billerReceiptId": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              }
            },
            "additionalProperties": false
          },
          "BillerSlabCommissionInfo": {
            "required": [
              "biller_id"
            ],
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              },
              "from_amount": {
                "type": "number",
                "format": "double"
              },
              "to_amount": {
                "type": "number",
                "format": "double"
              },
              "total_commission": {
                "type": "number",
                "format": "double"
              },
              "commission_to_com_bank": {
                "type": "number",
                "format": "double"
              },
              "commission_to_paymedia": {
                "type": "number",
                "format": "double"
              },
              "commission_to_biller": {
                "type": "number",
                "format": "double"
              },
              "maximum_commission": {
                "type": "number",
                "format": "double"
              }
            },
            "additionalProperties": false
          },
          "Billers": {
            "required": [
              "active_status",
              "biller_category_code",
              "biller_category_id",
              "biller_id",
              "biller_name"
            ],
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_category_code": {
                "type": "string"
              },
              "biller_id": {
                "type": "string"
              },
              "biller_name": {
                "type": "string"
              },
              "biller_image": {
                "type": "string",
                "nullable": true
              },
              "active_status": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          "CallbackReference": {
            "required": [
              "cllbackURL",
              "listenerSystem"
            ],
            "type": "object",
            "properties": {
              "cllbackURL": {
                "type": "string"
              },
              "listenerSystem": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "CashInApiRequest": {
            "type": "object",
            "properties": {
              "biller": {
                "type": "string",
                "nullable": true
              },
              "note": {
                "type": "string",
                "nullable": true
              },
              "transaction_amount": {
                "type": "number",
                "format": "double"
              },
              "customer_mobile_number": {
                "type": "string",
                "nullable": true
              },
              "merchant_outlet_code": {
                "type": "string",
                "nullable": true
              },
              "pin_code": {
                "type": "string",
                "nullable": true
              },
              "merchant_transaction_id": {
                "type": "string",
                "nullable": true
              },
              "merchant_id": {
                "type": "string",
                "nullable": true
              },
              "mobile_number": {
                "type": "string",
                "nullable": true
              },
              "transaction_id": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ChannelCreateRequest": {
            "required": [
              "active_status",
              "biller_categories",
              "billers",
              "channel_id",
              "name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "channel_id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "active_status": {
                "type": "boolean"
              },
              "biller_categories": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerCategory"
                }
              },
              "billers": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Billers"
                }
              }
            },
            "additionalProperties": false
          },
          "ChannelEditRequest": {
            "required": [
              "active_status",
              "biller_categories",
              "billers",
              "channel_id",
              "id",
              "name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "channel_id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "active_status": {
                "type": "boolean"
              },
              "biller_categories": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerCategory"
                }
              },
              "billers": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Billers"
                }
              }
            },
            "additionalProperties": false
          },
          "Characteristic": {
            "required": [
              "characteristicType",
              "name",
              "value"
            ],
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "characteristicType": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "CheckBalanceRequest": {
            "type": "object",
            "properties": {
              "biller": {
                "type": "string",
                "nullable": true
              },
              "code": {
                "type": "string",
                "nullable": true
              },
              "merchant_id": {
                "type": "string",
                "nullable": true
              },
              "merchant_number": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ClearSpecifyNotificationRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "notification_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "CommissionBreakdownDTO": {
            "type": "object",
            "properties": {
              "fromAmount": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "toAmount": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "toPayMedia": {
                "type": "number",
                "format": "double"
              },
              "toCombank": {
                "type": "number",
                "format": "double"
              },
              "toBiller": {
                "type": "number",
                "format": "double"
              }
            },
            "additionalProperties": false
          },
          "CommissionRateDTO": {
            "type": "object",
            "properties": {
              "rate": {
                "type": "number",
                "format": "double"
              },
              "rateType": {
                "type": "string",
                "nullable": true,
                "readOnly": true
              },
              "amount": {
                "type": "number",
                "format": "double"
              },
              "cap": {
                "type": "number",
                "format": "double",
                "nullable": true
              },
              "applied": {
                "type": "boolean"
              },
              "configuredBreakdown": {
                "$ref": "#/components/schemas/CommissionBreakdownDTO"
              },
              "calculatedBreakdown": {
                "$ref": "#/components/schemas/CommissionBreakdownDTO"
              }
            },
            "additionalProperties": false
          },
          "ContactDetail": {
            "required": [
              "isPrimary",
              "type",
              "value"
            ],
            "type": "object",
            "properties": {
              "isPrimary": {
                "type": "boolean"
              },
              "value": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "CustomerContactMediums": {
            "type": "object",
            "properties": {
              "emailAddress": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ContactDetail"
                },
                "nullable": true
              },
              "phoneNumber": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ContactDetail"
                },
                "nullable": true
              },
              "socialNetworkId": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ContactDetail"
                },
                "nullable": true
              },
              "address": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AddressDetail"
                },
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "DataListSearchRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "created_by": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "string",
                "nullable": true
              },
              "commission_type": {
                "type": "string",
                "nullable": true
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_category": {
                "type": "string",
                "nullable": true
              },
              "role_id": {
                "type": "integer",
                "format": "int64"
              },
              "channel_id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "ExternalReference": {
            "required": [
              "callbackReference",
              "eventType",
              "sourceSystem",
              "transactionId"
            ],
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string"
              },
              "eventType": {
                "type": "string"
              },
              "sourceSystem": {
                "type": "string"
              },
              "callbackReference": {
                "$ref": "#/components/schemas/CallbackReference"
              }
            },
            "additionalProperties": false
          },
          "GetBillerCategoryRequest": {
            "required": [
              "channel_id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "channel_id": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "GetBillerServiceMetaDataRequest": {
            "required": [
              "biller_id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              },
              "service_name": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "GetBillersForCategory": {
            "type": "object",
            "properties": {
              "category_id": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "GetBillersForCategoryAndChannelRequest": {
            "required": [
              "category_id",
              "channel_id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "category_id": {
                "type": "string"
              },
              "channel_id": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "GetByIdRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "GetDualAuthListRequest": {
            "required": [
              "type"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "type": {
                "type": "string"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "requested_by": {
                "type": "integer",
                "format": "int32",
                "nullable": true
              },
              "pending_action": {
                "type": "string",
                "nullable": true
              },
              "channel_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "logged_user": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "GetDualAuthRecordByIdRequest": {
            "required": [
              "id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "GetItemForEditRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "ProcessTransactionRequest": {
            "required": [
              "billerCode"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "account": {
                "type": "string",
                "nullable": true
              },
              "billerCode": {
                "type": "string"
              },
              "amount": {
                "type": "string",
                "nullable": true
              },
              "reference": {
                "type": "string",
                "nullable": true
              },
              "channel": {
                "type": "string",
                "nullable": true
              },
              "commission": {
                "$ref": "#/components/schemas/CommissionRateDTO"
              }
            },
            "additionalProperties": false
          },
          "RoleCreateRequest": {
            "required": [
              "active_status",
              "permissions",
              "role_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "role_name": {
                "maxLength": 128,
                "type": "string"
              },
              "permissions": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "disabled": {
                "type": "integer",
                "format": "int32"
              },
              "active_status": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "RoleEditRequest": {
            "required": [
              "active_status",
              "id",
              "permissions",
              "role_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "role_name": {
                "maxLength": 128,
                "type": "string"
              },
              "permissions": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "disabled": {
                "type": "integer",
                "format": "int32"
              },
              "active_status": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "SlabCommission": {
            "required": [
              "billerId",
              "commissionToBiller",
              "commissionToComBank",
              "commissionToPaymedia",
              "fromAmount",
              "toAmount",
              "totalCommission"
            ],
            "type": "object",
            "properties": {
              "billerId": {
                "type": "integer",
                "format": "int64"
              },
              "fromAmount": {
                "type": "number",
                "format": "double"
              },
              "toAmount": {
                "type": "number",
                "format": "double"
              },
              "totalCommission": {
                "type": "number",
                "format": "double"
              },
              "commissionToComBank": {
                "type": "number",
                "format": "double"
              },
              "commissionToPaymedia": {
                "type": "number",
                "format": "double"
              },
              "commissionToBiller": {
                "type": "number",
                "format": "double"
              },
              "maximumCommission": {
                "type": "number",
                "format": "double"
              }
            },
            "additionalProperties": false
          },
          "StatusCheckRequest": {
            "required": [
              "biller_payment_ref_id"
            ],
            "type": "object",
            "properties": {
              "biller_payment_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              }
            },
            "additionalProperties": false
          },
          "StatusCheckRequestDto": {
            "required": [
              "request",
              "response"
            ],
            "type": "object",
            "properties": {
              "request": {
                "$ref": "#/components/schemas/StatusCheckRequest"
              },
              "response": {
                "$ref": "#/components/schemas/StatusCheckResponse"
              }
            },
            "additionalProperties": false
          },
          "StatusCheckResponse": {
            "required": [
              "biller_collection_ref_id",
              "biller_payment_ref_id",
              "biller_receipt_id",
              "status_code",
              "status_message"
            ],
            "type": "object",
            "properties": {
              "status_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "status_message": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_collection_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_payment_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_receipt_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              }
            },
            "additionalProperties": false
          },
          "StoreTrasactionRequest": {
            "required": [
              "account_no",
              "amount",
              "biller_category_id",
              "biller_id",
              "channel_id",
              "status",
              "transaction_id"
            ],
            "type": "object",
            "properties": {
              "transaction_id": {
                "type": "string"
              },
              "account_no": {
                "type": "string"
              },
              "channel_id": {
                "type": "string"
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64"
              },
              "biller_id": {
                "type": "integer",
                "format": "int64"
              },
              "status": {
                "type": "string"
              },
              "amount": {
                "type": "number",
                "format": "double"
              },
              "success_or_failed_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "repost_attempt": {
                "type": "integer",
                "format": "int32"
              },
              "status_code": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "Stream": {
            "type": "object",
            "properties": {
              "canRead": {
                "type": "boolean",
                "readOnly": true
              },
              "canWrite": {
                "type": "boolean",
                "readOnly": true
              },
              "canSeek": {
                "type": "boolean",
                "readOnly": true
              },
              "canTimeout": {
                "type": "boolean",
                "readOnly": true
              },
              "length": {
                "type": "integer",
                "format": "int64",
                "readOnly": true
              },
              "position": {
                "type": "integer",
                "format": "int64"
              },
              "readTimeout": {
                "type": "integer",
                "format": "int32"
              },
              "writeTimeout": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "TransactionOverviewRequest": {
            "required": [
              "type"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "type": {
                "type": "string"
              },
              "id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "name": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "TransactionReportGenerateRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "channel_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_id": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "TransactionRequest": {
            "required": [
              "amount",
              "bank_reference_id",
              "biller_collection_ref_id",
              "biller_primary_id",
              "currency_code",
              "drce_indicator",
              "payment_date_time"
            ],
            "type": "object",
            "properties": {
              "biller_primary_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_collection_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "bank_reference_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "currency_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "amount": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "payment_date_time": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "drce_indicator": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customer_contact_mediums": {
                "$ref": "#/components/schemas/BillerContactMediums"
              },
              "biller_custom_details": {
                "$ref": "#/components/schemas/BillerCustomData"
              }
            },
            "additionalProperties": false
          },
          "TransactionRequestDto": {
            "required": [
              "request",
              "response"
            ],
            "type": "object",
            "properties": {
              "request": {
                "$ref": "#/components/schemas/TransactionRequest"
              },
              "response": {
                "$ref": "#/components/schemas/TransactionResponse"
              }
            },
            "additionalProperties": false
          },
          "TransactionRequestV2": {
            "required": [
              "auditInfo",
              "bankReferenceId",
              "billerCollectionRefId",
              "billerId",
              "billerPrimaryId",
              "drcrIndicator",
              "externalReference",
              "paymentDateTime",
              "transactionId"
            ],
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string"
              },
              "billerId": {
                "type": "string"
              },
              "billerPrimaryId": {
                "type": "string"
              },
              "billerCollectionRefId": {
                "type": "string"
              },
              "bankReferenceId": {
                "type": "string"
              },
              "paymentDateTime": {
                "type": "string"
              },
              "drcrIndicator": {
                "type": "string"
              },
              "identificationType": {
                "type": "string",
                "nullable": true
              },
              "identificationNumber": {
                "type": "string",
                "nullable": true
              },
              "currencyCode": {
                "type": "string",
                "nullable": true
              },
              "amount": {
                "type": "number",
                "format": "double"
              },
              "customerContactMediums": {
                "$ref": "#/components/schemas/CustomerContactMediums"
              },
              "billerCustomDetails": {
                "$ref": "#/components/schemas/BillerCustomDetails"
              },
              "externalReference": {
                "$ref": "#/components/schemas/ExternalReference"
              },
              "auditInfo": {
                "$ref": "#/components/schemas/AuditInfo"
              },
              "commission": {
                "$ref": "#/components/schemas/CommissionRateDTO"
              }
            },
            "additionalProperties": false
          },
          "TransactionResponse": {
            "required": [
              "biller_collection_ref_id",
              "biller_payment_ref_id",
              "status_code",
              "status_message"
            ],
            "type": "object",
            "properties": {
              "status_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "status_message": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_collection_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_payment_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_receipt_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              }
            },
            "additionalProperties": false
          },
          "TransactionStatusInquiryRequest": {
            "required": [
              "billerId",
              "billerPaymentRefId"
            ],
            "type": "object",
            "properties": {
              "billerId": {
                "type": "string"
              },
              "billerPaymentRefId": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "TransactionViewByIdRequest": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "TrasactionApproveRequest": {
            "required": [
              "action_taken",
              "change_request_id"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "change_request_id": {
                "type": "integer",
                "format": "int64"
              },
              "action_taken": {
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "TrasactionListRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "channel_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "transaction_status": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "TrasactionRePostRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              }
            },
            "additionalProperties": false
          },
          "TrasactionReportRequest": {
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "start_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "end_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "channel_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_category_id": {
                "type": "integer",
                "format": "int64",
                "nullable": true
              },
              "biller_id": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "TrasactionStoreRequest": {
            "required": [
              "account_no",
              "amount",
              "biller_category_name",
              "biller_id",
              "channel_id",
              "status",
              "transaction_id"
            ],
            "type": "object",
            "properties": {
              "transaction_id": {
                "type": "string"
              },
              "account_no": {
                "type": "string"
              },
              "channel_id": {
                "type": "string"
              },
              "biller_category_name": {
                "type": "string"
              },
              "biller_id": {
                "type": "string"
              },
              "status": {
                "type": "string"
              },
              "amount": {
                "type": "number",
                "format": "double"
              },
              "success_or_failed_date": {
                "type": "string",
                "format": "date-time",
                "nullable": true
              },
              "repost_attempt": {
                "type": "integer",
                "format": "int32"
              },
              "status_code": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "UserChangePasswordRequest": {
            "required": [
              "password",
              "user_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "user_name": {
                "maxLength": 128,
                "type": "string"
              },
              "password": {
                "maxLength": 32,
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "UserCreateRequest": {
            "required": [
              "active_status",
              "email",
              "name",
              "role",
              "type",
              "user_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "type": {
                "maxLength": 64,
                "type": "string"
              },
              "name": {
                "maxLength": 256,
                "type": "string"
              },
              "email": {
                "maxLength": 256,
                "type": "string"
              },
              "user_name": {
                "maxLength": 128,
                "type": "string"
              },
              "role": {
                "type": "integer",
                "format": "int32"
              },
              "active_status": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "UserEditRequest": {
            "required": [
              "active_status",
              "disabled",
              "email",
              "id",
              "name",
              "role",
              "type",
              "userName"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "type": {
                "maxLength": 64,
                "type": "string"
              },
              "name": {
                "maxLength": 256,
                "type": "string"
              },
              "userName": {
                "maxLength": 256,
                "type": "string"
              },
              "email": {
                "maxLength": 256,
                "type": "string"
              },
              "role": {
                "type": "integer",
                "format": "int32"
              },
              "disabled": {
                "type": "integer",
                "format": "int32"
              },
              "active_status": {
                "type": "integer",
                "format": "int32"
              }
            },
            "additionalProperties": false
          },
          "UserResetPasswordRequest": {
            "required": [
              "new_password",
              "old_password",
              "user_name"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "auth": {
                "$ref": "#/components/schemas/AuthDataModel"
              },
              "pageNumber": {
                "type": "integer",
                "format": "int32"
              },
              "pageSize": {
                "type": "integer",
                "format": "int32"
              },
              "user_name": {
                "maxLength": 128,
                "type": "string"
              },
              "old_password": {
                "maxLength": 32,
                "type": "string"
              },
              "new_password": {
                "maxLength": 32,
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "ValidateAccountRequest": {
            "type": "object",
            "properties": {
              "biller": {
                "type": "string",
                "nullable": true
              },
              "code": {
                "type": "string",
                "nullable": true
              },
              "account_number": {
                "type": "string",
                "nullable": true
              },
              "amount": {
                "type": "string",
                "nullable": true
              },
              "transaction_id": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ValidateTransactionRequest": {
            "required": [
              "billerCode"
            ],
            "type": "object",
            "properties": {
              "traceId": {
                "type": "string",
                "nullable": true
              },
              "account": {
                "type": "string",
                "nullable": true
              },
              "billerCode": {
                "type": "string"
              },
              "channel": {
                "type": "string",
                "nullable": true
              },
              "amount": {
                "type": "string",
                "nullable": true
              }
            },
            "additionalProperties": false
          },
          "ValidationRequest": {
            "required": [
              "biller_primary_id"
            ],
            "type": "object",
            "properties": {
              "biller_primary_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "identification_type": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/BillerIdentificationTypeMetaData"
                },
                "nullable": true
              },
              "identification_number": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "currency_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "amount": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customer_contact_mediums": {
                "$ref": "#/components/schemas/BillerContactMediums"
              },
              "biller_custom_details": {
                "$ref": "#/components/schemas/BillerCustomData"
              }
            },
            "additionalProperties": false
          },
          "ValidationRequestDto": {
            "required": [
              "request",
              "response"
            ],
            "type": "object",
            "properties": {
              "request": {
                "$ref": "#/components/schemas/ValidationRequest"
              },
              "response": {
                "$ref": "#/components/schemas/ValidationResponse"
              }
            },
            "additionalProperties": false
          },
          "ValidationRequestV2": {
            "required": [
              "auditInfo",
              "billerId",
              "billerPrimaryId",
              "externalReference"
            ],
            "type": "object",
            "properties": {
              "billerId": {
                "type": "string"
              },
              "billerPrimaryId": {
                "type": "string"
              },
              "identificationType": {
                "type": "string",
                "nullable": true
              },
              "identificationNumber": {
                "type": "string",
                "nullable": true
              },
              "currencyCode": {
                "type": "string",
                "nullable": true
              },
              "amount": {
                "type": "number",
                "format": "double"
              },
              "customerContactMediums": {
                "$ref": "#/components/schemas/CustomerContactMediums"
              },
              "billerCustomDetails": {
                "$ref": "#/components/schemas/BillerCustomDetails"
              },
              "externalReference": {
                "$ref": "#/components/schemas/ExternalReference"
              },
              "auditInfo": {
                "$ref": "#/components/schemas/AuditInfo"
              }
            },
            "additionalProperties": false
          },
          "ValidationResponse": {
            "required": [
              "biller_collection_ref_id",
              "status_code",
              "status_message"
            ],
            "type": "object",
            "properties": {
              "status_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "status_message": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_collection_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "biller_specific_ref_id": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customer_name": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "currency_code": {
                "$ref": "#/components/schemas/BillerMetaData"
              },
              "total_amount_due": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "minimum_acceptable_amount": {
                "$ref": "#/components/schemas/BillerClassPropertyMetadata"
              },
              "customer_contact_mediums": {
                "$ref": "#/components/schemas/BillerContactMediums"
              },
              "biller_custom_details": {
                "$ref": "#/components/schemas/BillerCustomData"
              }
            },
            "additionalProperties": false
          }
        }
      }
    };
    this.jsonObj = Object.assign(new OpenAPIDocument(), sampleData);
    console.log(this.jsonObj)
  }
})
</script>

<style scoped>

</style>
