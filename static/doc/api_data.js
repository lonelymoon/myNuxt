define({ "api": [
  {
    "type": "GET",
    "url": "/api/user/{paramId}",
    "title": "获取用户信息",
    "description": "<p>获取对应用户数据</p>",
    "group": "User",
    "name": "getUserInfo",
    "parameter": {
      "fields": {
        "参数": [
          {
            "group": "参数",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "参数",
            "type": "Number",
            "optional": true,
            "field": "perpage",
            "description": "<p>每页条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "/36571536830398454973374?page=1&perpage=10",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "{\n   \"success\": true,\n   \"msg\": \"获取用户信息成功\",\n   \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"success\": false,\n   \"msg\": \"获取用户信息失败\",\n   \"error\": {\n     \"code\": 1,\n     \"errorMsg\": \"用户不存在\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/36571536830398454973374"
      }
    ],
    "version": "1.0.0",
    "filename": "server/routes.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "登录验证",
    "description": "<p>对上传的用户数据进行校验</p>",
    "group": "User",
    "name": "login",
    "parameter": {
      "fields": {
        "登录": [
          {
            "group": "登录",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录帐号</p>"
          },
          {
            "group": "登录",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "数据格式:",
          "content": "{ account: 'user001', password: '12345678' }",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "{\n   \"success\": true,\n   \"msg\": \"登录成功\",\n   \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"success\": false,\n   \"msg\": \"登录失败\",\n   \"error\": {\n     \"code\": 1,\n     \"errorMsg\": \"账号密码不匹配\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/login/"
      }
    ],
    "version": "1.0.0",
    "filename": "server/routes.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/register",
    "title": "注册验证",
    "description": "<p>对上传的用户数据进行校验</p>",
    "group": "User",
    "name": "register",
    "parameter": {
      "fields": {
        "注册": [
          {
            "group": "注册",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录帐号</p>"
          },
          {
            "group": "注册",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "数据格式:",
          "content": "{ account: 'sdsads@qq.com', password: '12345678' }",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "{\n   \"success\": true,\n   \"msg\": \"注册成功\",\n   \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"success\": false,\n   \"msg\": \"注册失败\",\n   \"error\": {\n     \"code\": 1,\n     \"errorMsg\": \"账号已存在\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/register/"
      }
    ],
    "version": "1.0.0",
    "filename": "server/routes.js",
    "groupTitle": "User"
  }
] });
