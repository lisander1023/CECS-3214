<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/textbooks">
		<html>
			<body>
				<h2>My Textbooks</h2>
				<table border="3">
					<tr bgcolor="#e6e6e6">
						<th>Title</th>
						<th>Author First name</th>
						<th>Author Last name</th>
						<th>Publisher name</th>
						<th>Publisher website</th>
						<th>Year of Publication</th>
						<th>ISBN</th>
						<th>Edition</th>
						<th>Cover type</th>
					</tr>
					<xsl:for-each select="textbook">
						<tr>
							<td>
								<xsl:value-of select="title"/>
							</td>
							<td>
								<xsl:value-of select="author/firstName"/>
							</td>
							<td>
								<xsl:value-of select="author/lastName"/>
							</td>
							<td>
								<xsl:value-of select="publisher"/>
							</td>
							<td>
								<xsl:value-of select="website"/>
							</td>
							<td>
								<xsl:value-of select="Year-of-Publication"/>
							</td>
							<td>
								<xsl:value-of select="ISBN"/>
							</td>
							<td>
								<xsl:value-of select="edition"/>
							</td>
							<td>
								<xsl:value-of select="cover-type"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>