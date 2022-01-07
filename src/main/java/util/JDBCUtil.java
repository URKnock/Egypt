
// commons-dbcp2-X.X.X.jar, commons-pool2-X.X.X.jar, commons-logging-X.X.jar
package util;

import java.sql.*;

public class JDBCUtil {
	private static ConnectionManager connMan = new ConnectionManager();  
	private String sql = null;
	private Object[] parameters = null;
	private static Connection conn = null;
	private PreparedStatement pstmt = null;
	private CallableStatement cstmt = null;
	private ResultSet rs = null;
	private int resultSetType = ResultSet.TYPE_FORWARD_ONLY,
				resultSetConcurrency = ResultSet.CONCUR_READ_ONLY;

	public JDBCUtil() {	}
	public JDBCUtil(String sql) {
		this.setSql(sql);		
	}
	public JDBCUtil(String sql, Object[] parameters) {
		this.setSql(sql);
		this.setParameters(parameters);
	}
	
	public void setSql(String sql) {
		this.sql = sql;
	}
	public void setParameters(Object[] parameters) {
		this.parameters = parameters;
	}
	
	public String getSql() {
		return this.sql;
	}
	private Object getParameter(int index) throws Exception {
		if (index >= getParameterSize())
			throw new Exception("INDEX 값이 파라미터의 갯수보다 많습니다.");
		return parameters[index];
	}
	private int getParameterSize() {
		return parameters == null ? 0 : parameters.length;
	}
	
	public void setSqlAndParameters(String sql, Object[] parameters) {
		this.sql = sql;
		this.parameters = parameters;
		this.resultSetType = ResultSet.TYPE_FORWARD_ONLY;
		this.resultSetConcurrency = ResultSet.CONCUR_READ_ONLY;
	}
	public void setSqlAndParameters(String sql, Object[] parameters, int resultSetType, int resultSetConcurrency) {
		this.sql = sql;
		this.parameters = parameters;
		this.resultSetType = resultSetType;
		this.resultSetConcurrency = resultSetConcurrency;
	}
	private PreparedStatement getPreparedStatement() throws SQLException {
		if (conn == null) {
			conn = connMan.getConnection();
			conn.setAutoCommit(false);
		}
		if (pstmt != null) pstmt.close();
		pstmt = conn.prepareStatement(sql, resultSetType, resultSetConcurrency);
		// JDBCUtil.printDataSourceStats(ds);
		return pstmt;
	}
	
	public ResultSet executeQuery() {
		try {
			pstmt = getPreparedStatement();
			for (int i = 0; i < getParameterSize(); i++) {
				pstmt.setObject(i + 1, getParameter(i));
			}
			rs = pstmt.executeQuery();
			return rs;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}
	public int executeUpdate() throws SQLException, Exception {
		pstmt = getPreparedStatement();
		int parameterSize = getParameterSize();
		for (int i = 0; i < parameterSize; i++) {
			if (getParameter(i) == null) { // 매개변수 값이 널이 부분이 있을 경우
				pstmt.setString(i + 1, null);
			} else {
				pstmt.setObject(i + 1, getParameter(i));
			}
		}
		return pstmt.executeUpdate();
	}
	
	private CallableStatement getCallableStatement() throws SQLException {
		if (conn == null) {
			conn = connMan.getConnection();
			conn.setAutoCommit(false);
		}
		if (cstmt != null) cstmt.close();
		cstmt = conn.prepareCall(sql);
		return cstmt;
	}
	
	public boolean execute(JDBCUtil source) throws SQLException, Exception {
		cstmt = getCallableStatement();
		for (int i = 0; i < source.getParameterSize(); i++) {
			cstmt.setObject(i + 1, source.getParameter(i));
		}
		return cstmt.execute();
	}
	
	private PreparedStatement getPreparedStatement(String[] columnNames) throws SQLException {
		if (conn == null) {
			conn = connMan.getConnection();
			conn.setAutoCommit(false);
		}
		if (pstmt != null)
			pstmt.close();
		pstmt = conn.prepareStatement(sql, columnNames);
		return pstmt;
	}
	
	public int executeUpdate(String[] columnNames) throws SQLException, Exception {
		pstmt = getPreparedStatement(columnNames); // 위 메소드를 호출
		int parameterSize = getParameterSize();
		for (int i = 0; i < parameterSize; i++) {
			if (getParameter(i) == null) { // 매개변수 값이 널이 부분이 있을 경우
				pstmt.setString(i + 1, null);
			} else {
				pstmt.setObject(i + 1, getParameter(i));
			}
		}
		return pstmt.executeUpdate();
	}
	
	public ResultSet getGeneratedKeys() {
		try {
			return pstmt.getGeneratedKeys();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public void close() {
		if (rs != null) {
			try {
				rs.close();
				rs = null;
			} catch (SQLException ex) {
				ex.printStackTrace();
			}
		}
		if (pstmt != null) {
			try {
				pstmt.close();
				pstmt = null;
			} catch (SQLException ex) {
				ex.printStackTrace();
			}
		}
		if (cstmt != null) {
			try {
				cstmt.close();
				cstmt = null;
			} catch (SQLException ex) {
				ex.printStackTrace();
			}
		}
		if (conn != null) {
			try {
				conn.close();
				conn = null;
			} catch (SQLException ex) {
				ex.printStackTrace();
			}
		}
	}

	public void commit() {
		try {
			conn.commit();
		} catch (SQLException ex) {
			ex.printStackTrace();
		}
	}

	public void rollback() {
		try {
			conn.rollback();
		} catch (SQLException ex) {
			ex.printStackTrace();
		}
	}

	public void shutdownPool() {
		this.close();
		connMan.close();
	}

	public void printDataSourceStats() {
		connMan.printDataSourceStats();
	}
}
